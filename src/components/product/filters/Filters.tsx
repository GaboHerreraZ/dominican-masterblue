"use client";
import { IoFilterSharp } from "react-icons/io5";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Filter } from "@/domain/model/filter";
import { ProductTranslations } from "@/models/productTranslations";
import { createPageUrl } from "../actions/actions";
import { PriceFilter } from "./Price";
import { SubCategoryFilter } from "./SubCategory";
import { useFilterStore } from "@/store/useFilterStore";
import { SUBCATEGORIES } from "@/utils/const";

interface Props {
  translations: ProductTranslations;
}

export const FiltersProduct = ({ translations }: Props) => {
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();

  const path = usePathname().split("/")[1];
  const router = useRouter();

  const setSubCategory = useFilterStore((state) => state.setSubCategory);
  const filter = useFilterStore((state) => state.filter);
  const resetFilter = useFilterStore((state) => state.reset);

  const { control, getValues, setValue } = useForm<Filter>({
    defaultValues: {},
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const filterProducts = async () => {
      const url = await createPageUrl(path, searchParams, filter);
      router.push(url);
    };

    filterProducts();
    // setValue("subcategories", filter.subcategories);
  }, [filter, path, router, searchParams]);

  const onSubmit = async () => {
    let filters = getValues();

    const subcategory = SUBCATEGORIES.filter((s) => {
      const subcategories = filters.subcategories.map(
        (subcategory) => `${subcategory}`
      );

      return subcategories.includes(s.key);
    });

    setSubCategory(subcategory);
    filters = {
      ...filters,
      category: filter.category,
    };
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = async () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const clearFilter = () => {
    resetFilter();
  };

  const onClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <React.Fragment>
      {isClient ? (
        <section>
          <Button
            size="sm"
            radius="none"
            color="primary"
            variant="light"
            aria-label="Filter"
            className="text-master-900 font-bold uppercase text-md"
            endContent={<IoFilterSharp size={20} />}
            onClick={() => toggleSidebar()}
          >
            {translations?.filterBy}
          </Button>

          <section
            className={`fixed h-screen  bg-gray-400/20  z-50 top-0 left-0  transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform ease-in-out duration-300`}
          >
            <div
              ref={sidebarRef}
              className="flex w-72 p-5 bg-master-secondary   h-full flex-col  gap-5"
            >
              <h4 className="text-white font-bold uppercase">
                {translations?.filters}
              </h4>
              <form>
                <SubCategoryFilter
                  control={control}
                  label={translations.subcategory}
                  labelNoCategory={translations.noCategory}
                  path={path}
                  onSubmit={onSubmit}
                />

                <PriceFilter
                  control={control}
                  onSubmit={onSubmit}
                  label={translations?.price}
                />
              </form>

              <Button
                size="sm"
                radius="none"
                color="primary"
                variant="solid"
                aria-label="Clear Filter"
                className="text-white font-bold  text-sm"
                onClick={() => clearFilter()}
              >
                {translations.clearFilter}
              </Button>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
