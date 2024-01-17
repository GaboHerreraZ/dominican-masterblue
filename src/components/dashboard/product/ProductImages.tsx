import { Button } from "@nextui-org/button";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { storage } from "@/lib/firebase";
import {
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Progress } from "@nextui-org/progress";
import toast from "react-hot-toast";
import { useProductAdminStore } from "@/store/useProductAdminStore";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";

type ProductFile = File & {
  preview: string;
};

interface Props {
  product: Product;
  translations: ProductTranslations;
}

export const ProductImages = ({ product, translations }: Props) => {
  const [productState, setProduct] = useState<Product>(product);
  const [files, setFiles] = useState<ProductFile[]>([]);
  const [progress, setProgress] = useState(0);

  const deleteImageStore = useProductAdminStore((state) => state.deleteImage);
  const markMainImageStore = useProductAdminStore((state) => state.markImage);

  function fileSizeValidator(file: File) {
    if (file.size > 350000) {
      toast.error(translations?.imageSizeTooLarge || "");
      return {
        code: "size-too-large",
        message: translations?.imageSizeTooLarge || "",
      };
    }

    return null;
  }

  const deletePreview = (file: ProductFile) => {
    setFiles((fileState) => {
      const newFiles = fileState.filter((f) => f.name !== file.name);
      return [...newFiles];
    });
  };

  const onDrop = (acceptedFiles: any) => {
    const newFiles: ProductFile[] = acceptedFiles.map((file: File) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setFiles((files) => [...files, ...newFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    validator: fileSizeValidator,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 5,
  });

  const handleUpload = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (files.length < 2) {
        toast.error("agrega minimo 2 images");
        return;
      }

      const uploadPromises: UploadTask[] = [];
      files.map(async (image: ProductFile) => {
        const imageRef = ref(storage, `products/${product.id}/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          null,
          () => {
            deletePreview(image);
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setProduct((product) => ({
                ...product,
                images: [
                  ...(product.images || []),
                  {
                    name: `products/${product.id}/${image.name}`,
                    url: downloadURL,
                  },
                ],
              }));
            });
          }
        );

        uploadPromises.push(uploadTask);
      });

      try {
        await Promise.all(uploadPromises);
        toast.success(translations?.saveOk || "");
      } catch (error) {
        toast.error(translations?.errorUploadingImages || "");
      }
    },
    [files, product.id, translations.errorUploadingImages, translations.saveOk]
  );

  const deleteImage = async (name: string) => {
    const response = await deleteImageStore(name, product);
    if (response) {
      setProduct((product) => ({
        ...product,
        images: product.images?.filter((i) => i.name !== name),
      }));
      toast.success(translations?.deleteImageOk || "");
    }
  };

  const markMainImage = async (image: { url: string; name: string }) => {
    const urlUpdated = image.url.replace(
      "https://firebasestorage.googleapis.com",
      ""
    );
    const response = await markMainImageStore(
      urlUpdated,
      image.name,
      product.id
    );
    if (response) {
      toast.success(translations?.markAsMainOk || "");
      setProduct((product) => ({
        ...product,
        mainImage: image.name,
        urlImage: image.url,
      }));
    }
  };

  return (
    <section className="grid  md:flex h-[500px]">
      <div className="block  md:w-1/2  ">
        <div className="w-full  h-[100px] border-dashed border-1 border-master-900/70 ">
          {productState.images?.length === 6 ? (
            <p className="grid p-10 cursor-pointer place-items-center h-full italic font-bold text-medium text-master-900/70">
              {translations?.maxImages}
            </p>
          ) : (
            <div
              {...getRootProps()}
              className="grid p-0 md:p-10 cursor-pointer place-items-center h-full italic font-bold text-medium text-master-900/70"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-center text-xl">
                  {translations?.isDragActive}
                </p>
              ) : (
                <p className="text-center text-xl">
                  {translations?.dragDescription}
                </p>
              )}
            </div>
          )}
        </div>
        {progress > 0 && progress < 100 && (
          <Progress
            aria-label="Downloading..."
            size="md"
            value={progress}
            color="primary"
            showValueLabel={true}
            className="w-full mt-2"
          />
        )}
        <Button
          isDisabled={product.images?.length === 6}
          className="mt-2"
          color="primary"
          variant="bordered"
          radius="none"
          size="sm"
          onClick={handleUpload}
          startContent={<IoIosSave size={15} />}
        >
          {translations?.saveProduct}
        </Button>
        <div className="flex flex-wrap gap-2 overflow-y-auto w-full mt-5 ">
          {files.map((f: ProductFile, i: number) => {
            return (
              <div key={i} className="flex flex-col  items-center  gap-1">
                <Button
                  className="self-center"
                  variant="light"
                  radius="full"
                  isIconOnly
                  onClick={() => deletePreview(f)}
                  size="sm"
                >
                  <IoMdClose size={20} />
                </Button>
                <Image
                  key={f.name}
                  alt="image-to-download"
                  width={100}
                  height={100}
                  src={f.preview}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col place-items-center md:w-1/2 px-5">
        <h4 className="text-center p-2 text-master-900/70 font-bold italic text-lg">
          {translations?.imagesUploaded}
        </h4>
        <div className="flex flex-wrap justify-center">
          {productState.images?.map((url, i) => {
            return (
              <div
                key={i}
                className={`relative group w-[150px] h-[150px]  ${
                  productState.mainImage === url.name
                    ? "border-4 border-master-900/70"
                    : ""
                }  `}
              >
                <Image
                  key={i}
                  src={url.url}
                  alt={url.name}
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  className="absolute"
                ></Image>
                <div className="absolute  place-items-center w-full h-full bg-black/70 hidden group-hover:grid top-0 z-1">
                  <Button
                    className="self-center"
                    variant="shadow"
                    color="danger"
                    radius="none"
                    size="sm"
                    onClick={() => deleteImage(url.name)}
                    startContent={<RiDeleteBin5Fill size={10} />}
                  >
                    {translations?.deleteProduct}
                  </Button>
                  <Button
                    className="self-center"
                    variant="shadow"
                    color="primary"
                    radius="none"
                    size="sm"
                    onClick={() => markMainImage(url)}
                    startContent={<FaBookmark size={10} />}
                  >
                    {translations?.markAsMain}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
