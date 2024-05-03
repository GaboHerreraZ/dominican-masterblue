"use client";
import Select from "@/components/ui/select/Select";
import { Base } from "@/interfaces/base";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { useState } from "react";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
interface Props {
  categories: Base[];
  subcategories: Base[];
}

export const ProductsFilter = ({ categories, subcategories }: Props) => {
  const { handleSubmit, register, resetField } = useForm({
    defaultValues: {
      categoryId: "",
      subcategoryId: "",
      state: "true",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const onSubmit = (data: any) => {
    const { categoryId, subcategoryId, state } = data;

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

    params.set("state", state);
    
    handleOpen()
    router.replace(`/admin/products/${category.link}?${params.toString()}`);
  };

  const handleReset = () => {
    resetField("categoryId");
    resetField("subcategoryId");
    resetField("state");

    handleOpen()

    router.replace(`/admin/products/all`);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center border-b-[1px] border-gray-300 container md:mx-auto px-2 lg:px-10 mt-5">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Productos</h1>
        <Link className="button-gold" href="/admin/product/nuevo">
          Agregar Producto
        </Link>
      </header>

      {/* 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container md:mx-auto px-2 lg:px-10 mt-5 md:mt-0">
            <div className="grid grid-cols-1 gap-6 bg-white justify-end">
              <div className="flex flex-row">
                <div className="pt-6 md:pt-1">
                  <Select
                    className="border p-2 rounded text-xs font-semibold uppercase"
                    options={categories}
                    text="Categoria"
                    {...register("categoryId")}
                  />
                </div>
                <div className="pt-6 md:pt-1 md:pl-6">
                  <Select
                    className="border p-2 rounded text-xs font-semibold uppercase"
                    options={subcategories}
                    text="Subcategoria"
                    {...register("subcategoryId")}
                  />
                </div>

                <div className="pt-6 md:pt-1 md:pl-6">
                  <select
                    className="border p-2 rounde text-xs font-semibold uppercase"
                    {...register("state")}
                  >
                    <option value="true">Estado activo</option>
                    <option value="false">Estado inactivo</option>
                  </select>
                </div>
                <div className="pt-6 md:pt-1 md:pl-6">
                  <button
                    className="p-2 border rounded-md bg-slate-950 text-white text-xs font-semibold uppercase"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
                <div className="pt-6 md:pt-1 md:pl-6">
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
      */}

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
            <h1 className="text-slate-950 text-2xl">Filtros</h1>
            <button onClick={handleOpen} className="cursor-pointer p-2">
              <IoMdClose
                size={30}
                className="hover:rotate-45 transition-rotate duration-500 "
              />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container md:mx-auto px-2 lg:px-10 mt-5 md:mt-0">
              <div className="grid grid-cols-1 gap-3 bg-white">
                
                  <div className="pt-6 md:pt-1 justify-start">
                    <Select
                      className="container border p-2 rounded text-xs md:text-xs font-semibold uppercase "
                      options={categories}
                      text="Categoria"
                      {...register("categoryId")}
                    />
                  </div>
                
                  <div className="pt-6 md:pt-1 justify-start">
                    <Select
                      className="border p-2 rounded text-xs font-semibold uppercase"
                      options={subcategories}
                      text="Subcategoria"
                      {...register("subcategoryId")}
                    />
                  </div>
                
                  <div className="pt-6 md:pt-1 justify-start">
                    <select
                      className="border p-2 rounded text-xs font-semibold uppercase"
                      {...register("state")}
                    >
                      <option value="true">Estado activo</option>
                      <option value="false">Estado inactivo</option>
                    </select>
                  </div>

                <div className="flex justify-end gap-2">
                  <div className="pt-6 md:pt-1 md:pl-6">
                    <button className="button-gold uppercase text-sm" type="submit">
                      Buscar
                    </button>
                  </div>
                  <div className="pt-6 md:pt-1 md:pl-6">
                    <button
                      className="button-gold uppercase text-sm"
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
        </aside>
        {isOpen && (
          <div
            onClick={handleOpen}
            className="w-full h-full z-10 transition-all duration-500 fixed  bg-black/50"
          ></div>
        )}
      </div>

      <div className="container md:mx-auto px-2 lg:px-10 mt-5 md:mt-0m">
        <button className="flex gap-1 cursor-pointer" onClick={handleOpen}>
          <TbFilterSearch size={25} />
          <label className="cursor-pointer font-bold">Filtrar</label>
        </button>
      </div>
    </>
  );
};
