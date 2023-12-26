"use client";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";
import { FaFilter } from "react-icons/fa6";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Category,
  SubCategory,
  categories,
  subcategories,
} from "@/utils/const";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Filter } from "@/domain/model/filter";
import { ProductTranslations } from "@/models/productTranslations";
import {
  createPageUrl,
  getCookieFilter,
  setCookieFilter,
} from "../actions/actions";

interface Props {
  translations: ProductTranslations;
}

export const FiltersProduct = ({ translations }: Props) => {
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();

  const path = usePathname().split("/")[1];
  const router = useRouter();

  const { control, getValues, setValue } = useForm<Filter>({
    defaultValues: {},
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async () => {
    const filters = getValues();
    setCookieFilter(filters);
    const url = await createPageUrl(path, searchParams, filters);
    router.push(url);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = async () => {
    const cookie = await getCookieFilter();
    if (cookie.price) {
      setValue("price", cookie.price);
    }

    if (cookie.categories) {
      setValue("categories", cookie.categories);
    }

    if (cookie.subcategories) {
      setValue("subcategories", cookie.subcategories);
    }

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
            endContent={<FaFilter size={20} />}
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
                  defaultValue={[]}
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
                  defaultValue={[]}
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
                  defaultValue={[0, 10000]}
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
