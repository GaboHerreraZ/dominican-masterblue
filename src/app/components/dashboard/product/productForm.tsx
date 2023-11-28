import { Product } from "@/domain/model/product";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { SubmitHandler, useForm } from "react-hook-form";
import { Divider } from "@nextui-org/divider";
import { Switch } from "@nextui-org/switch";
import { useProductStore } from "@/store/useProductStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ModalButton } from "@/app/utils/modal";
import { DeleteIcon, SaveIcon } from "@/app/utils/iconsUtils";
import { revalidateTag } from "next/cache";
import { ProductTranslations } from "@/app/models/productTranslations";

interface ProductFormProps {
  product: Product;
  translations: ProductTranslations;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  translations,
}) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
  } = useForm<Product>({ defaultValues: product });

  const updateProduct = useProductStore((state) => state.update);
  const createProduct = useProductStore((state) => state.create);
  const deleteProduct = useProductStore((state) => state.delete);

  const navigation = useRouter();

  const deleteProductById = async (accept: boolean) => {
    if (!accept) return;
    const response = await deleteProduct(product.id);
    if (response) {
      toast.success(translations.deleteOk || "");
      navigation.push("/dashboard/productos");
    }
  };

  const onSubmit: SubmitHandler<Product> = async (data) => {
    if (!isValid) {
      return;
    }

    if (product.id === "nuevo") {
      const response = await createProduct(data);
      if (response) toast.success(translations.saveOk || "");
      navigation.push(`/dashboard/productos/${response}`);

      return;
    }

    const response = await updateProduct(data);
    if (response) {
      toast.success(translations.updatedOk || "");
    }
  };

  return (
    <>
      <form className=" py-5 w-full" onSubmit={handleSubmit(onSubmit)}>
        <header className="flex gap-2">
          <Button
            type="submit"
            variant="bordered"
            size="sm"
            radius="none"
            color="primary"
            className="flex gap-0"
            startContent={<SaveIcon size={15} />}
            isDisabled={!isValid}
          >
            {translations.saveProduct}
          </Button>
          <ModalButton
            title={`${translations.titleDeleteModal} ${product.spanishName}`}
            isDanger={true}
            message={translations.deleteMessage}
            callBack={deleteProductById}
            startContent={<DeleteIcon size={15} />}
          >
            {translations.deleteProduct}
          </ModalButton>
          <Switch
            defaultSelected={product.state}
            onChange={(e: any) => setValue("state", e.target.checked)}
            size="sm"
            color="success"
          >
            <span className="text-small italic font-bold text-master-900/70">
              {product.state ? translations.active : translations.inactive}
            </span>
          </Switch>
        </header>

        <div className="flex flex-col md:flex-row gap-2 mt-5 shadow-lg p-5">
          <div className="w-full md:w-1/3 py-2">
            <div className="space-y-1">
              <h4 className="text-medium  text-master-900/70 font-bold">
                {translations.generalInformation}
              </h4>
              <p className="text-small text-default-400 italic">
                {translations.generalInformationDescription}
              </p>
            </div>
            <Divider className="my-4 px-2" />
            <section className="flex gap-6 ">
              <div className="flex flex-col w-full">
                <Input
                  {...register("spanishName", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  label={translations.spanishName}
                  placeholder={translations.spanishNamePlaceHolder}
                  isInvalid={errors.spanishName && true}
                  errorMessage={
                    errors.spanishName && "Nombre en español requerido"
                  }
                />
                <Textarea
                  {...register("spanishDescription", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  size="sm"
                  label={translations.spanishDescription}
                  minRows={1}
                  placeholder={translations.spanishDescriptionPlaceHolder}
                  errorMessage={
                    errors.spanishDescription
                      ? "Descripción en español es requerida"
                      : ""
                  }
                  isInvalid={errors.spanishDescription ? true : false}
                />
              </div>
              <div className="flex flex-col w-full">
                <Input
                  {...register("englishName", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  label={translations.englishName}
                  placeholder={translations.englishNamePlaceHolder}
                  errorMessage={
                    errors.englishName ? "Nombre en inglés requerido" : ""
                  }
                  isInvalid={errors.englishName ? true : false}
                />
                <Textarea
                  {...register("englishDescription", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  size="sm"
                  label={translations.englishDescription}
                  minRows={1}
                  placeholder={translations.englishDescriptionPlaceHolder}
                  errorMessage={
                    errors.spanishName
                      ? "Descripción en inglés es requerida"
                      : ""
                  }
                  isInvalid={errors.englishDescription ? true : false}
                />
              </div>
            </section>
          </div>

          <div className="w-full md:w-1/3 py-2 ">
            <div className="space-y-1">
              <h4 className="text-medium text-master-900/70 font-bold">
                {translations.specifications}
              </h4>
              <p className="text-small text-default-400 italic">
                {translations.specificationsDescription}
              </p>
            </div>
            <Divider className="my-4" />
            <section className="flex flex-wrap ">
              <div className="flex flex-grow  gap-4 ">
                <Input
                  {...register("price", { required: true })}
                  isRequired
                  type="number"
                  label={translations.price}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  errorMessage={errors.price ? "Precio es requerido" : ""}
                  isInvalid={errors.price ? true : false}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                />

                <Input
                  {...register("material", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  label={translations.material}
                  placeholder={translations.materialPlaceHolder}
                  errorMessage={
                    errors.spanishName ? "Please enter a valid email" : ""
                  }
                  isInvalid={errors.material ? true : false}
                />

                <Input
                  {...register("weight", { required: false })}
                  type="number"
                  label={translations.weight}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Kg</span>
                    </div>
                  }
                />
              </div>
              <div className="flex  items-end gap-4 w-full">
                <Input
                  {...register("height", { required: false })}
                  type="number"
                  label={translations.height}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Cm</span>
                    </div>
                  }
                />
                <Input
                  {...register("width", { required: false })}
                  type="number"
                  label={translations.width}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Cm</span>
                    </div>
                  }
                />
                <Input
                  {...register("length", { required: false })}
                  type="number"
                  label={translations.length}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Cm</span>
                    </div>
                  }
                />
              </div>
            </section>
          </div>

          <div className="w-full md:w-1/3 py-2 ">
            <div className="space-y-1">
              <h4 className="text-medium text-master-900/70 font-bold">
                {translations.additionalInformation}
              </h4>
              <p className="text-small italic text-default-400">
                {translations.additionalInformationDescription}
              </p>
            </div>
            <Divider className="my-4" />
            <section className="flex flex-wrap ">
              <div className="flex flex-grow  gap-4 ">
                <Input
                  {...register("quantity", { required: true })}
                  isRequired
                  type="number"
                  label={translations.quantity}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                />
                <Input
                  {...register("youTubeLink", { required: false })}
                  type="text"
                  label={translations.youtubeLink}
                  placeholder={translations.youtubeLinkPlaceHolder}
                  variant="underlined"
                  color="primary"
                />
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};
