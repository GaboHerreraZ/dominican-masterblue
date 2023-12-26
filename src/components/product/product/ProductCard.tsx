"use client";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";
import { ProductCardButton } from "./ProductCardButton";
import { useState } from "react";
import noImage from "../../../../public/img/png/no-image.png";

interface Translations {
  lng: string;
  translations: ProductTranslations;
}

interface Props {
  product: Product;
  translations: Translations;
}

export const ProductCard = ({ product, translations }: Props) => {
  const [image, setImage] = useState(product.urlImage);
  return (
    <Card
      onMouseEnter={() =>
        setImage(product.images ? product.images[1].url : product.urlImage)
      }
      onMouseLeave={() => setImage(product.urlImage)}
      aria-label={product.englishName}
      isFooterBlurred
      radius="none"
      className="relative h-full transition-all duration-500 ease-in-out"
    >
      <Image
        alt="desk"
        className="absolute  transition-all duration-500"
        src={image ? image : noImage}
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
      />
      <CardFooter className="w-[calc(100%_-_8px)] before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute  rounded-none bottom-1  shadow-small ml-1">
        <article className="w-full">
          <p className=" text-xl  text-white">
            {translations.lng === "es"
              ? product.spanishName
              : product.englishName}
          </p>
          <p className="font-bold text-master-900/70 italic">
            ${product.price}
          </p>
        </article>
        <ProductCardButton
          id={product.id}
          slug={product.slug}
          label={translations.translations?.seeMore}
          lng={translations.lng}
        />
      </CardFooter>
    </Card>
  );
};
