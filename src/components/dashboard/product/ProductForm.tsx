import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosSave, IoMdAddCircle } from "react-icons/io";

import { Product } from "@/domain/model/product";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Divider } from "@nextui-org/divider";
import { Switch } from "@nextui-org/switch";
import { useProductAdminStore } from "@/store/useProductAdminStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ModalButton } from "@/utils/modal";
import { useState } from "react";
import { categories, subcategories } from "@/utils/const";
import { Select, SelectItem } from "@nextui-org/select";
import { ProductTranslations } from "@/models/productTranslations";

interface ProductFormProps {
  product: Product;
  lng: string;
  translations: ProductTranslations;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  lng,
  translations,
}) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
    control,
  } = useForm<Product>({
    defaultValues: product,
  });
  const [state, setState] = useState(product.state);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "colors",
  });

  const updateProduct = useProductAdminStore((state) => state.update);
  const createProduct = useProductAdminStore((state) => state.create);
  const deleteProduct = useProductAdminStore((state) => state.delete);

  const navigation = useRouter();

  const deleteProductById = async (accept: boolean) => {
    if (!accept) return;
    const response = await deleteProduct(product.id);
    if (response) {
      toast.success(translations?.deleteOk || "");
      navigation.push("/dashboard/productos");
    }
  };

  const onSubmit: SubmitHandler<Product> = async (data) => {
    if (!isValid) return;

    if (product.id === "nuevo") {
      const response = await createProduct(data);
      if (response) toast.success(translations?.saveOk || "");
      navigation.push(`/dashboard/productos/${response}`);

      return;
    }

    const response = await updateProduct(data);
    if (response) {
      toast.success(translations?.updatedOk || "");
    }
  };

  return (
    <>
      <form
        className=" py-5 w-full overflow-x-hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <header className="flex gap-2">
          <section className="flex gap-2">
            <Button
              type="submit"
              variant="bordered"
              size="sm"
              radius="none"
              color="primary"
              className="flex gap-0"
              startContent={<IoIosSave size={15} />}
            >
              {translations?.saveProduct}
            </Button>
            <ModalButton
              title={`${translations?.titleDeleteModal} ${product.spanishName}`}
              isDanger={true}
              message={translations?.deleteMessage || ""}
              callBack={deleteProductById}
              startContent={<RiDeleteBin5Fill size={15} />}
            >
              {translations?.deleteProduct}
            </ModalButton>
            <Switch
              defaultSelected={product.state}
              onChange={(e: any) => {
                setValue("state", e.target.checked);
                setState(e.target.checked);
              }}
              size="sm"
              color="success"
            >
              <span className="text-small italic font-bold text-master-900/70">
                {state ? translations?.active : translations?.inactive}
              </span>
            </Switch>
          </section>
        </header>
        <div className="w-1/3 py-3">
          <Input
            {...register("slug", {
              required: true,
              pattern: /^[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$/,
              disabled: product.id !== "nuevo",
            })}
            type="text"
            variant="underlined"
            color="primary"
            label={translations?.slug}
            placeholder={translations?.slug}
            isInvalid={errors.slug && true}
            errorMessage={errors.slug && translations?.slugValidation}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:flex-row gap-2 mt-5 shadow-lg border-1 p-5">
          <div className="py-2">
            <div className="space-y-1">
              <h4 className="text-medium  text-master-900/70 font-bold">
                {translations?.generalInformation}
              </h4>
              <p className="text-small text-default-400 italic">
                {translations?.generalInformationDescription}
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
                  label={translations?.spanishName}
                  placeholder={translations?.spanishNamePlaceHolder}
                  isInvalid={errors.spanishName && true}
                  errorMessage={
                    errors.spanishName && translations?.spanishNameValidation
                  }
                />
                <Textarea
                  {...register("spanishDescription", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  size="sm"
                  label={translations?.spanishDescription}
                  minRows={1}
                  placeholder={translations?.spanishDescriptionPlaceHolder}
                  errorMessage={
                    errors.spanishDescription &&
                    translations?.spanishDescriptionValidation
                  }
                  isInvalid={errors.spanishDescription && true}
                />
              </div>
              <div className="flex flex-col w-full">
                <Input
                  {...register("englishName", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  label={translations?.englishName}
                  placeholder={translations?.englishNamePlaceHolder}
                  errorMessage={
                    errors.englishName && translations?.englishNameValidation
                  }
                  isInvalid={errors.englishName && true}
                />
                <Textarea
                  {...register("englishDescription", { required: true })}
                  isRequired
                  type="text"
                  variant="underlined"
                  color="primary"
                  size="sm"
                  label={translations?.englishDescription}
                  minRows={1}
                  placeholder={translations?.englishDescriptionPlaceHolder}
                  errorMessage={
                    errors.englishDescription &&
                    translations?.englishDescriptionValidation
                  }
                  isInvalid={errors.englishDescription && true}
                />
              </div>
            </section>
          </div>

          <div className="py-2">
            <div className="space-y-1">
              <h4 className="text-medium text-master-900/70 font-bold">
                {translations?.specifications}
              </h4>
              <p className="text-small text-default-400 italic">
                {translations?.specificationsDescription}
              </p>
            </div>
            <Divider className="my-4" />
            <section className="flex flex-wrap ">
              <div className="flex flex-grow  gap-4 ">
                <Input
                  {...register("price", { required: true, min: 0 })}
                  isRequired
                  type="number"
                  label={translations?.price}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                  errorMessage={errors.price && translations?.priceValidation}
                  isInvalid={errors.price && true}
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
                  label={translations?.material}
                  placeholder={translations?.materialPlaceHolder}
                  errorMessage={
                    errors.material && translations?.materialValidation
                  }
                  isInvalid={errors.material && true}
                />

                <Input
                  {...register("weight", { required: false })}
                  type="number"
                  label={translations?.weight}
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
                  label={translations?.height}
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
                  label={translations?.width}
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
                  label={translations?.length}
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

          <div className="py-2">
            <div className="space-y-1">
              <h4 className="text-medium text-master-900/70 font-bold">
                {translations?.additionalInformation}
              </h4>
              <p className="text-small italic text-default-400">
                {translations?.additionalInformationDescription}
              </p>
            </div>
            <Divider className="my-4" />
            <section className="flex flex-col  flex-wrap ">
              <div className="flex flex-grow  gap-4 ">
                <Input
                  {...register("quantity", { required: true })}
                  isRequired
                  type="number"
                  label={translations?.quantity}
                  placeholder="0"
                  variant="underlined"
                  color="primary"
                />
                <Input
                  {...register("youTubeLink", { required: false })}
                  type="text"
                  label={translations?.youtubeLink}
                  placeholder={translations?.youtubeLinkPlaceHolder}
                  variant="underlined"
                  color="primary"
                />
              </div>
              <div className="flex flex-grow gap-4">
                <Select
                  {...register("category", {
                    required: true,
                  })}
                  defaultSelectedKeys={[product.category]}
                  variant={"underlined"}
                  label={translations?.category}
                  radius="none"
                  placeholder={translations?.categoryDescription}
                  selectionMode="single"
                  color="primary"
                  classNames={{
                    popoverContent: "rounded-none",
                  }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                      ],
                    },
                  }}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.key} value={category.key}>
                      {lng === "es"
                        ? category.spanishLabel
                        : category.englishLabel}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  {...register("subCategory", {
                    required: true,
                  })}
                  variant={"underlined"}
                  label={translations?.subcategory}
                  defaultSelectedKeys={[product.subCategory]}
                  radius="none"
                  placeholder={translations?.subcategoryDescription}
                  selectionMode="single"
                  color="primary"
                  classNames={{
                    popoverContent: "rounded-none",
                  }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                      ],
                    },
                  }}
                >
                  {subcategories.map((category) => (
                    <SelectItem key={category.key} value={category.key}>
                      {lng === "es"
                        ? category.spanishLabel
                        : category.englishLabel}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </section>
          </div>

          <div className="py-2 ">
            <h4 className="text-medium  text-master-900/70 font-bold">
              {translations?.availableColours}
            </h4>
            <Divider className="px-2 my-1" />
            <section className="flex gap-1 items-center">
              {fields.map((field, index) => (
                <div key={field.id} className="text-center">
                  <Button
                    variant="light"
                    radius="full"
                    isIconOnly
                    color="danger"
                    size="sm"
                    className="mb-2"
                    onClick={() => remove(index)}
                  >
                    <RiDeleteBin5Fill size={15} />
                  </Button>

                  <Input
                    classNames={{
                      base: "rounded-full",
                      input: "rounded-full h-5 w-5 ",
                      innerWrapper: "rounded-full p-0",
                      inputWrapper: "bg-transparent shadow-none hover:bg-none",
                    }}
                    size="sm"
                    {...register(`colors.${index}.color` as const)}
                    type="color"
                  />
                </div>
              ))}
              <Button
                className="self-center"
                variant="light"
                radius="full"
                isIconOnly
                onClick={() => append({ color: "#000000" })}
                size="sm"
              >
                <IoMdAddCircle size={15} />
              </Button>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};
