"use client";

import { Order } from "@/interfaces/order";
import { ORDERBY } from "@/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuListOrdered } from "react-icons/lu";

interface Props {
  translations: any;
  lng: string;
}

export const ProductOrder = ({ translations, lng }: Props) => {
  const [order, setOrder] = useState<Order>();

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const translateOrder: any = ORDERBY[lng] || ORDERBY.en;

  const handleOrder = (order: Order) => {
    setOrder(order);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (order) {
      params.set("order", order.order);
      params.set("orderBy", order.orderBy);
    } else {
      params.delete("order");
      params.delete("orderBy");
    }

    const url = `${pathName}?${params.toString()}`;
    router.replace(url, { scroll: false });
  }, [order, pathName, router, searchParams]);

  return (
    <div className="group relative w-[220px]">
      <h1 className="flex mt-4 md:mt-0 font-bold gap-1 items-center text-md  w-full ">
        <LuListOrdered size={25} />
        {translations.orderBy}: <span className="font-bold">{order?.name}</span>
      </h1>
      <div className="z-50 invisible group-hover:visible  w-full opacity-0 group-hover:opacity-100 absolute group-hover:text-gold  transition-all duration-500">
        <ul className="border-[1px] w-full bg-white  border-gray-200 ">
          {translateOrder.map((item: any, idx: number) => (
            <li
              key={item.id + idx}
              className="hover:bg-slate-950 hover:Text-gold px-4"
            >
              <label
                onClick={() => handleOrder(item)}
                className="cursor-pointer"
              >
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
