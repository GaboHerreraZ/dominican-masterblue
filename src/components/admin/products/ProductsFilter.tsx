"use client";
import Select from "@/components/ui/select/Select";
import { Base } from "@/interfaces/base";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

interface Props {
  categories: Base[];
  subcategories: Base[];
  searchCategory: string;
  searchSubcategory: string;
  sku: {
    id: number;
    name: string;
    spanishDescription: string;
    englishDescription: string;
    link: string;
  }[];
  className?: string;
}

export const ProductsFilter = ({
  categories,
  subcategories,
  sku,
  searchCategory,
  searchSubcategory,
  className,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const categoryId = categories.find((e) => e.link === searchCategory)?.id;

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      categoryId: !categoryId ? "" : `${categoryId}`,
      subcategoryId: searchSubcategory,
      sku: "",
    },
  });

  const onSubmit = (data: any) => {
    const { categoryId, subcategoryId, sku } = data;

    const category =
      categoryId === ""
        ? { link: "all" }
        : categories.filter((e) => e.id === +categoryId)[0];

    const subcategory =
      subcategoryId === ""
        ? { link: "" }
        : subcategories.filter((e) => e.id === +subcategoryId)[0];

    if (subcategory.link) {
      params.set("subcategory", subcategory.link);
    } else {
      params.set("subcategory", "");
    }

    router.replace(`/admin/products/${category.link}?${params.toString()}`);
  };

  const handleReset = () => {
    reset();
    router.replace(`/admin/products/all`);
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto px-2 mt-2">
          <div className="grid grid-cols-1 gap-6 bg-white justify-end">
            <div className="grid md:grid-cols-6 grid-cols-1 md:gap-4 gap-1">
              <Select
                className="border p-2 rounded text-xs  "
                options={categories}
                placeholder="Categoría"
                text="Seleccione una por favor..."
                {...register("categoryId")}
              />
              <Select
                placeholder="Subcategoría"
                className="border p-2 rounded text-xs  "
                options={subcategories}
                text="Seleccione una por favor..."
                {...register("subcategoryId")}
              />

              <Select
                className="border p-2 rounded text-xs  "
                options={sku}
                text="Referencia"
                {...register("sku")}
              />

              <div className="grid grid-cols-1  md:grid-cols-2 place-content-center">
                <button
                  className="p-2 border rounded-md bg-slate-950 text-white text-xs font-semibold uppercase"
                  type="submit"
                >
                  Buscar
                </button>
                <button
                  className="p-2 border rounded-md bg-slate-950 text-white text-xs font-semibold uppercase"
                  type="button"
                  onClick={handleReset}
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
