import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useTranslationStore } from "@/store/translationStore";
import { Product } from "@/domain/model/product";

export const ProductCard = ({ product }: { product: Product }) => {
  const { productTranslations, lng } = useTranslationStore.getState();

  return (
    <Card
      aria-label={product.englishName}
      isFooterBlurred
      radius="none"
      className="relative h-[300px]"
    >
      <Image
        alt="desk"
        className="absolute "
        src={product.urlImage}
        fill
        sizes="100%s"
        style={{ objectFit: "cover" }}
      />
      <CardFooter className="w-[calc(100%_-_8px)] before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute  rounded-none bottom-1  shadow-small ml-1 z-10">
        <article className="w-full">
          <p className=" text-xl  text-white">
            {lng === "es" ? product.spanishName : product.englishName}
          </p>
          <p className=" text-small font-bold text-white">{product.price}</p>
        </article>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="none"
          size="sm"
        >
          {productTranslations?.seeMore}
        </Button>
      </CardFooter>
    </Card>
  );
};
