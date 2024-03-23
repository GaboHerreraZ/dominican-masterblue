"use client";
import { Base } from "@/interfaces/base";
import clsx from "clsx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { TbFilterSearch } from "react-icons/tb";
import { CategorySelector } from "./CategorySelector";
import { BaseSelector } from "./BaseSelector";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ProductOrder } from "./ProductOrder";
import Link from "next/link";
import { Category } from "@/interfaces/category";

interface Props {
  categories: Category[];
  subcategories: Base[];
  lng: string;
  translations: any;
}

export const ProductFilters = ({
  categories,
  subcategories,
  lng,
  translations,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  const category = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const subcategoryFilter = params.get("subcategoria")?.split(",") || [];

  const handleParams = (filter: string, filters: string[]) => {
    params.set(filter, filters.join(","));
    const url = `${pathName}?${params.toString()}`;
    router.replace(url);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={clsx("min-h-screen  z-[100] absolute top-0", {
          "w-full": isOpen,
          "w-0": !isOpen,
        })}
      >
        <aside
          className={clsx(
            "w-[280px]  bg-white z-50 border-r-[2px] border-gold fixed h-screen  transition-all duration-700",
            {
              "translate-x-0": isOpen,
              "-translate-x-full": !isOpen,
            }
          )}
        >
          <div className="flex border-b-[1px] border-gray-200 justify-between items-center px-2 font-bold">
            <h1 className="text-slate-950 text-2xl">{translations.filterBy}</h1>
            <button onClick={handleOpen} className="cursor-pointer  p-2">
              <IoMdClose
                size={30}
                className="hover:rotate-45 transition-rotate duration-500 "
              />
            </button>
          </div>

          <div className="mt-10">
            <h1 className="text-xl font-bold my-5 border-b-[1px] border-b-slate-100 text-slate-950 mx-2">
              {translations.categories}
            </h1>
            <CategorySelector
              lng={lng}
              categories={categories}
              category={category.category as string}
            />
          </div>
          <div className="mt-10">
            <h1 className="text-xl font-bold  border-b-[1px] border-b-slate-100 text-slate-950 mx-2">
              {translations.subcategories}
            </h1>
            <BaseSelector
              base={subcategories}
              filter="subcategoria"
              state={subcategoryFilter}
              setParams={handleParams}
            />
          </div>
          <div className="mt-2 flex pr-2 justify-end">
            <Link
              className="button-gold"
              href="http://localhost:3000/en/productos/todos"
            >
              {translations.clearFilter}
            </Link>
          </div>
        </aside>
        {isOpen && (
          <div
            onClick={handleOpen}
            className="w-full h-full z-10 transition-all duration-500 fixed  bg-black/50"
          ></div>
        )}
      </div>

      <section className="w-full mt-20 container px-12 md:px-0 m-5  mx-auto">
        <div className="flex flex-col md:flex-row  justify-between">
          <button className="flex gap-1 cursor-pointer" onClick={handleOpen}>
            <TbFilterSearch size={25} />
            <label className="cursor-pointer font-bold">
              {translations.filterBy}
            </label>
          </button>
          <ProductOrder lng={lng} translations={translations} />
        </div>
      </section>
    </>
  );
};
