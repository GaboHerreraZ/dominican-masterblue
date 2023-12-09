"use client";
import { OrderBy } from "@/domain/model/filter";
import { useTranslationStore } from "@/store/translationStore";
import { useProductStore } from "@/store/useProductStore";
import { Select, SelectItem } from "@nextui-org/select";

export const OrderByFilter = () => {
  const translations = useTranslationStore(
    (state) => state.productTranslations
  );

  const orderBy = [
    { label: translations?.highPrice, value: "desc" },
    { label: translations?.lowPrice, value: "asc" },
  ];

  const filterProduct = useProductStore((state) => state.filterProducts);
  const filter = useProductStore((state) => state.filter);

  const onChangeOrder = async (value: React.ChangeEvent<HTMLSelectElement>) => {
    const index: number = Number(value.target.value);
    const order = orderBy[index].value as OrderBy;
    filter.orderBy = order;
    await filterProduct(filter);
  };

  return (
    <Select
      aria-label={translations?.orderBy}
      onChange={onChangeOrder}
      radius="none"
      className="md:max-w-[250px]"
      variant={"underlined"}
      placeholder={translations?.orderBy}
      classNames={{
        popoverContent: "rounded-none",
      }}
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
      {orderBy.map((order, index) => (
        <SelectItem key={index} value={order.value}>
          {order.label}
        </SelectItem>
      ))}
    </Select>
  );
};
