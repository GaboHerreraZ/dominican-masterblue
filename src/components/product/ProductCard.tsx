import Image from "next/image";

import { Product } from "@/interfaces/product";
import { ButtonDetail } from "./ButtonDetail";
import { currencyFormat } from "@/utils";

export const ProductCard = ({
  product,
  lng,
}: {
  product: Product;
  lng: string;
}) => {
  const name = lng === "es" ? product.spanishName : product.englishName;

  return (
    <div className="grid">
      <div className="relative z-10 group w-[280px] min-h-[320px] bg-white shadow-md rounded  my-3  box-border">
        <Image
          className="rounded w-full  transition-all duration-700 "
          src={product.productImage[0].url}
          alt={name}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0   w-[280px] opacity-0 min-h-[320px] group-hover:opacity-100 h-0 transition-all duration-500 ">
          <div className=" relative h-full rounded w-full z-20">
            {product.productImage[1]?.url && (
              <Image
                className="rounded w-full transition-all duration-700 "
                src={product.productImage[1].url}
                alt={name}
                sizes="100%"
                fill
                style={{ objectFit: "cover" }}
              />
            )}

            <div className="absolute bg-black/40 rounded top-0 h-full w-full"></div>
            <div className="absolute  bottom-3 w-full">
              <ButtonDetail id={product.slug} name={name} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
        <p className="text-md text-gray-800 mt-0">
          {currencyFormat(product.price)}
        </p>
      </div>
    </div>
  );
};
