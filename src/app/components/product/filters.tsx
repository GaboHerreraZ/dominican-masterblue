"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Slider } from "@nextui-org/slider";
import { FilterIcon } from "@/app/utils/iconsUtils";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { ProductTranslations } from "@/app/models/productTranslations";

const categories = [
  { label: "Desk", value: "desk", description: "Desk" },
  { label: "Desks", value: "desks", description: "Desks" },
  { label: "Chair", value: "chair", description: "Chair" },
  { label: "Chairs", value: "chairs", description: "Chairs" },
];

const colors = [
  { label: "Desk", value: "desk", description: "Desk", color: "#091A7A" },
  { label: "Desks", value: "desks", description: "Desks", color: "#091A7A" },
  { label: "Chair", value: "chair", description: "Chair", color: "#091A7A" },
  { label: "Chairs", value: "chairs", description: "Chairs", color: "#091A7A" },
];

export const FiltersProduct = ({
  translations,
}: {
  translations: ProductTranslations;
}) => {
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
        {translations.filterBy}
      </Button>

      <section
        className={`fixed mt-[65px] h-screen  bg-gray-400/20 w-full  z-50 top-0 left-0  transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300`}
      >
        <div
          ref={sidebarRef}
          className="flex w-72 p-5  bg-white h-full flex-col  gap-5"
        >
          <Select
            variant={"underlined"}
            label={translations.category}
            radius="none"
            placeholder={translations.categoryDescription}
            selectionMode="multiple"
            color="primary"
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
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
          <Slider
            size="sm"
            step={1}
            maxValue={5000}
            minValue={0}
            label={translations.price}
            aria-label={translations.price}
            defaultValue={[200, 1500]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="w-full"
          />
          <Select
            variant={"underlined"}
            label={translations.colors}
            placeholder={translations.colorDescription}
            selectionMode="multiple"
            color="primary"
            items={colors}
            classNames={{
              value: "flex flex-row gap-2",
            }}
            listboxProps={{
              itemClasses: {
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
                description: "flex",
                wrapper: "flex flex-row",
              },
            }}
            renderValue={(colors) => {
              return colors.map((color) => (
                <div
                  key={color.data?.value}
                  aria-label={color.data?.label}
                  className={`w-[20px] h-[20px] rounded-full`}
                  style={{ backgroundColor: color.data?.color }}
                ></div>
              ));
            }}
          >
            {(color) => (
              <SelectItem
                key={color.value}
                aria-label={color.label}
                value={color.value}
                classNames={{}}
              >
                <div className="flex gap-2">
                  <div
                    className={`w-[20px] h-[20px]  rounded-full`}
                    style={{ backgroundColor: color.color }}
                  ></div>

                  {color.label}
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </section>
    </section>
  );
};
