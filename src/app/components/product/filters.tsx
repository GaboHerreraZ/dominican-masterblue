"use client";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";
import { FilterIcon } from "@/app/utils/iconsUtils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { useTranslationStore } from "@/store/translationStore";
import {
  Category,
  SubCategory,
  categories,
  subcategories,
} from "@/app/utils/const";
import { usePathname } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Filter } from "@/domain/model/filter";
import { useProductStore } from "@/store/useProductStore";

export const FiltersProduct = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const filterProduct = useProductStore((state) => state.filterProducts);
  const filter = useProductStore((state) => state.filter);

  const { control, getValues } = useForm<Filter>({
    defaultValues: filter,
  });

  const onSubmit = async () => {
    const filters = getValues();
    await filterProduct(filters);
  };

  const path = usePathname().split("/")[1];

  const translations = useTranslationStore(
    (state) => state.productTranslations
  );

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
            variant="bordered"
            aria-label="Filter by"
            className="text-master-900 font-bold"
            endContent={<FilterIcon fill="#091A7A" size={30} />}
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
              className="flex w-72 p-5   bg-[#1c2022]   h-full flex-col  gap-5"
            >
              <h4 className="text-white font-bold uppercase">
                {translations?.filters}
              </h4>
              <form>
                <Controller
                  control={control}
                  name="categories"
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      className="mb-10"
                      label={translations?.category}
                      classNames={{
                        label: "text-white font-bold uppercase",
                      }}
                      radius="none"
                      color="primary"
                      defaultValue={value}
                      onChange={(value) => {
                        onChange(value);
                        onSubmit();
                      }}
                    >
                      {categories.map((category: Category, idx: number) => (
                        <Checkbox
                          classNames={{ label: "text-white" }}
                          key={idx}
                          value={category.key}
                        >
                          {path === "en"
                            ? category.englishLabel
                            : category.spanishLabel}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  )}
                />
                <Controller
                  control={control}
                  name="subcategories"
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      className="mb-10"
                      label={translations?.subcategory}
                      classNames={{
                        label: "text-white font-bold uppercase",
                      }}
                      radius="none"
                      color="primary"
                      defaultValue={value}
                      onChange={(value) => {
                        onChange(value);
                        onSubmit();
                      }}
                    >
                      {subcategories.map(
                        (category: SubCategory, idx: number) => (
                          <Checkbox
                            classNames={{ label: "text-white" }}
                            key={idx}
                            value={category.key}
                          >
                            {path === "en"
                              ? category.englishLabel
                              : category.spanishLabel}
                          </Checkbox>
                        )
                      )}
                    </CheckboxGroup>
                  )}
                />

                <Controller
                  control={control}
                  name="price"
                  render={({ field: { onChange, value } }) => (
                    <Slider
                      onChange={(value) => {
                        onChange(value);
                        onSubmit();
                      }}
                      value={value}
                      size="sm"
                      step={500}
                      maxValue={10000}
                      minValue={0}
                      classNames={{
                        label: "text-white font-bold uppercase",
                        value: "text-white font-bold uppercase",
                      }}
                      label={translations?.price}
                      aria-label={translations?.price}
                      defaultValue={[0, 10000]}
                      formatOptions={{ style: "currency", currency: "USD" }}
                      className="w-full"
                    />
                  )}
                />
              </form>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
