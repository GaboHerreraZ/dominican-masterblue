"use client";
import { Product } from "@/domain/model/product";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { SubmitHandler, useForm } from "react-hook-form";
import { Divider } from "@nextui-org/divider";
import { Switch } from "@nextui-org/switch";
import { useProductStore } from "@/store/useProductStore";
import { useRouter } from "next/navigation";

interface ProductFormProps {
  product: Product;
}

export const ProductForm: React.FC<ProductFormProps> = async ({ product }) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
  } = useForm<Product>({ defaultValues: product });

  const updateProduct = useProductStore((state) => state.updateProduct);
  const createProduct = useProductStore((state) => state.setProduct);

  const navigation = useRouter();

  const onSubmit: SubmitHandler<Product> = async (data) => {
    console.log(isValid);
    if (!isValid) {
      return;
    }

    if (product.id === "nuevo") {
      const response = await createProduct(data);
      console.log("create", response);
      navigation.push(`/dashboard/productos/${response}`);
      return;
    }

    await updateProduct(data);
  };

  return (
    <form className=" py-5 w-full" onSubmit={handleSubmit(onSubmit)}>
      <header className="flex gap-2">
        <Button
          type="submit"
          variant="bordered"
          size="sm"
          radius="none"
          color="primary"
          isDisabled={!isValid}
        >
          Guardar
        </Button>

        <Button
          type="submit"
          variant="bordered"
          size="sm"
          radius="none"
          color="danger"
        >
          Eliminar
        </Button>
        <Switch
          defaultSelected={product.state}
          onChange={(e: any) => setValue("state", e.target.checked)}
          size="sm"
          color="success"
        >
          <span className="text-small italic font-bold text-master-900/70">
            {product.state ? "Activo" : "Inactivo"}
          </span>
        </Switch>
      </header>

      <div className="flex flex-col md:flex-row gap-2 mt-5 shadow-lg p-5">
        <div className="w-full md:w-1/3 py-2">
          <div className="space-y-1">
            <h4 className="text-medium  text-master-900/70 font-bold">
              Datos Generales
            </h4>
            <p className="text-small text-default-400 italic">
              Datos relacionados al nombre y descripción del producto
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
                label="Español"
                placeholder="Ingrese nombre en español"
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
                label="Descripción español"
                minRows={1}
                placeholder="Ingrese descripción en español"
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
                label="Inglés"
                placeholder="Ingrese nombre en inglés"
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
                label="Descripción inglés"
                minRows={1}
                placeholder="Ingrese descripción en inglés"
                errorMessage={
                  errors.spanishName ? "Descripción en inglés es requerida" : ""
                }
                isInvalid={errors.englishDescription ? true : false}
              />
            </div>
          </section>
        </div>

        <div className="w-full md:w-1/3 py-2 ">
          <div className="space-y-1">
            <h4 className="text-medium text-master-900/70 font-bold">
              Especificaciones
            </h4>
            <p className="text-small text-default-400 italic">
              Especificaciones técnicas del producto
            </p>
          </div>
          <Divider className="my-4" />
          <section className="flex flex-wrap ">
            <div className="flex flex-grow  gap-4 ">
              <Input
                {...register("price", { required: true })}
                isRequired
                type="number"
                label="Price"
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
                label="Material"
                placeholder="Enter your email"
                errorMessage={
                  errors.spanishName ? "Please enter a valid email" : ""
                }
                isInvalid={errors.material ? true : false}
              />

              <Input
                {...register("weight", { required: false })}
                type="number"
                label="Peso"
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
                label="Alto"
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
                label="Ancho"
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
                label="Largo"
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
              Datos Adicionales
            </h4>
            <p className="text-small italic text-default-400">
              Información adicional del producto
            </p>
          </div>
          <Divider className="my-4" />
          <section className="flex flex-wrap ">
            <div className="flex flex-grow  gap-4 ">
              <Input
                {...register("quantity", { required: true })}
                isRequired
                type="number"
                label="Quantity"
                placeholder="0"
                variant="underlined"
                color="primary"
              />
              <Input
                {...register("linkYoutube", { required: false })}
                type="text"
                label="Link Youtube"
                placeholder="Ingrese link de youtube"
                variant="underlined"
                color="primary"
              />
            </div>
          </section>
        </div>
      </div>
    </form>
  );
};
