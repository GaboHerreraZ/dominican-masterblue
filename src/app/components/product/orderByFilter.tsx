"use client";
import { useTranslationStore } from "@/store/translationStore";
import { useProductStore } from "@/store/useProductStore";
import { Select, SelectItem } from "@nextui-org/select";

export const OrderByFilter = () => {
  const translations = useTranslationStore(
    (state) => state.productTranslations
  );

  const setProducts = useProductStore((state) => state.setProducts);

  const orderBy = [
    { label: translations?.recently, value: 1 },
    { label: translations?.highPrice, value: 2 },
    { label: translations?.lowPrice, value: 3 },
  ];

  return (
    <Select
      aria-label={translations?.orderBy}
      onChange={(value) => setProducts([])}
      radius="none"
      className="md:max-w-[250px]"
      variant={"underlined"}
      placeholder={translations?.orderBy}
      selectionMode="single"
      color="primary"
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
        },
      }}
    >
      {orderBy.map((order) => (
        <SelectItem key={order.value} value={order.value}>
          {order.label}
        </SelectItem>
      ))}
    </Select>
  );
};
