import { CategoryProduct } from "@/domain/model/categoryProduct";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { getTranslation } from "@/i18n";
import { HomeProductCardButton } from "./HomeProductCardButton";

export const HomeProductCard = async ({
  product,
  lng,
}: {
  product: CategoryProduct;
  lng: string;
}) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <Card
      isFooterBlurred
      radius="none"
      classNames={{
        base: "w-full h-[350px]",
      }}
    >
      <div className="relative flex place-content-center h-full">
        <Image
          alt="chair"
          className="absolute"
          src={product.imagen}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardFooter className="justify-between  border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-xl font-bold text-[#1c2022]">{t(product.title)}</p>
        <HomeProductCardButton
          label={t("seeMore")}
          category={product.category}
        />
      </CardFooter>
    </Card>
  );
};
