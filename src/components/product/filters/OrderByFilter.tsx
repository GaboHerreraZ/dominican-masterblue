"use client";
import { OrderBy } from "@/domain/model/filter";
import { ProductTranslations } from "@/models/productTranslations";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  translations: ProductTranslations;
}

export const OrderByFilter = ({ translations }: Props) => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const path = usePathname().split("/")[1];

  const orderBy = [
    { label: translations?.highPrice, value: "desc" },
    { label: translations?.lowPrice, value: "asc" },
  ];

  const onChangeOrder = async (value: React.ChangeEvent<HTMLSelectElement>) => {
    let url = `/${path}/productos?`;
    const index: number = Number(value.target.value);
    const order = orderBy[index].value as OrderBy;
    const params = new URLSearchParams(searchParams);
    router.push(`${url}${params.toString()}`);
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
      defaultSelectedKeys={[]}
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
