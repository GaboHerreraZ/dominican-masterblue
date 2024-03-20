"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";

import { Base } from "@/interfaces/base";
import { Product } from "@/interfaces/product";
import { useLoadingStore } from "@/store";
import { toastError, toastSuccess } from "@/utils/notifications";
import { createUpdateProduct, deleteImage } from "@/actions";

import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import Checkbox from "@/components/ui/checkbox/Checkbox";

interface Props {
  product: Partial<Product>;
  categories: Base[];
  subcategories: Base[];
}

export const ProductPage = ({ product, categories, subcategories }: Props) => {
  const router = useRouter();
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ defaultValues: product });

  const onSubmit = async (data: Product) => {
    const formData = new FormData();
    const { images, ...rest } = data;

    if (data.state && Number(data.quantity) === 0) {
      toastError("El producto no puede estar disponible si la cantidad es 0");
      return;
    }

    if (images?.length === 0 && product.productImage?.length === 0) {
      toastError("Se requiere al menos una imagen");
      return;
    }

    if (product.productImage?.length === 4) {
      toastError("No se pueden subir más de 4 imagenes");
      return;
    }

    toggleLoading(true);

    if (product.id) {
      formData.append("id", product.id ?? "");
    }

    formData.append("spanishDescription", rest.spanishDescription);
    formData.append("englishDescription", rest.englishDescription);
    formData.append("spanishName", rest.spanishName);
    formData.append("englishName", rest.englishName);
    formData.append("slug", rest.slug);
    formData.append("material", rest.material);
    formData.append("price", rest.price.toString());
    formData.append("quantity", rest.quantity.toString());
    formData.append("state", rest.state.toString());
    formData.append("youtubeLink", rest.youtubeLink);
    formData.append("length", rest.length.toString());
    formData.append("weight", rest.weight.toString());
    formData.append("width", rest.width.toString());
    formData.append("height", rest.height.toString());
    formData.append("categoryId", rest.categoryId);
    formData.append("subcategoryId", rest.subcategoryId);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    const { ok, product: productCreated } = await createUpdateProduct(formData);

    ok
      ? toastSuccess(
          `Producto ${product.id ? "actualizado" : "creado"} correctamente`
        )
      : toastError(
          `Error al ${product.id ? "actualizar" : "crear"} el producto`
        );

    toggleLoading(false);

    if (ok) router.replace(`/admin/producto/${productCreated?.id}`);
  };

  const handleDeleteImage = async (id: number, folder: string) => {
    toggleLoading(true);
    const { ok } = await deleteImage(id, folder);
    ok
      ? toastSuccess("Imagen eliminada correctamente")
      : toastError("Error eliminando la imagen");

    toggleLoading(false);
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="flex justify-between items-center border-b-[1px] border-gray-300 mb-5">
          <h1 className="text-xl font-extrabold  uppercase">Producto</h1>
          <button type="submit" className="button-gold mb-2">
            Guardar
          </button>
        </header>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <Input
            {...register("spanishName", { required: true })}
            placeholder="Nombre"
            error={errors.spanishName && "Nombre en español requerido"}
          />
          <Input
            {...register("spanishDescription", { required: true })}
            placeholder="Descripción"
            error={errors.spanishDescription && "Descripción requerido"}
          />
          <Input
            {...register("englishName", { required: true })}
            placeholder="Nombre en ingles"
            error={errors.spanishName && "Nombre en ingles requerido"}
          />
          <Input
            {...register("englishDescription", { required: true })}
            placeholder="Descripción en ingles"
            error={
              errors.englishDescription && "Descripción en ingles requerido"
            }
          />
          <Input
            {...register("slug", {
              required: true,
              pattern: /^[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$/,
            })}
            placeholder="Slug"
            error={errors.slug && "Slug requerido ej: muebles-oficina"}
          />
          <Input
            {...register("material", { required: true })}
            placeholder="Material"
            error={errors.material && "Material requerido"}
          />
          <Input
            type="number"
            {...register("price", { required: true })}
            placeholder="Precio"
            error={errors.price && "Precio requerido"}
          />
          <Input
            type="number"
            {...register("quantity")}
            placeholder="Cantidad"
          />
          <Input
            {...register("youtubeLink", {
              pattern:
                /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|shorts\/)?([A-Za-z0-9\-_]{11})/,
            })}
            placeholder="Youtube Link"
          />
          <Input type="number" {...register("length")} placeholder="Longitud" />
          <Input type="number" {...register("weight")} placeholder="Peso" />
          <Input type="number" {...register("width")} placeholder="Ancho" />
          <Input type="number" {...register("height")} placeholder="Altura" />

          <Select
            error={errors.categoryId && "Categoría requerida"}
            placeholder="Selecciona una categoría"
            {...register("categoryId", { required: true })}
            options={categories}
          />

          <Select
            error={errors.subcategoryId && "Subcategoría requerida"}
            placeholder="Selecciona una subcategoría"
            {...register("subcategoryId", { required: true })}
            options={subcategories}
          />

          <Checkbox {...register("state")} placeholder="Estado" />
        </div>
        <h1 className="border-b-[1px] mt-5 border-gray-300 text-xl font-extrabold  uppercase">
          Adjuntar Imagenes
        </h1>
        <div className="mt-2">
          <label className="flex flex-col">
            <input
              type="file"
              multiple
              id="custom-input"
              className="text-raffle-text"
              {...register("images")}
            />
          </label>
        </div>
      </form>
      <div className="mt-5">
        <h1 className="border-b-[1px] mt-5 border-gray-300 text-xl font-extrabold  uppercase">
          Imagenes cargadas
        </h1>
        <div className="flex gap-4 mt-3">
          {product?.productImage?.map((url, index) => (
            <div key={index} className="grid gap-2 ">
              <button
                onClick={() => handleDeleteImage(url.id, url.folder)}
                className="text-red-500 flex justify-center"
              >
                <FaRegTrashAlt size={15} />
              </button>
              <Image src={url.url} alt={url.url} width={150} height={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
