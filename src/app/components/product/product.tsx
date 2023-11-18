import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/legacy/image";
import comedor from "../../../../public/img/jpg/comedor.jpg";
import { Button } from "@nextui-org/button";
import { useTranslation } from "@/app/i18n";

export const Product = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "products");

  return (
    <Card isFooterBlurred radius="none">
      <Image
        alt="desk"
        className="absolute "
        src={comedor}
        layout="intrinsic"
        objectFit="cover"
      />
      <CardFooter className="w-[calc(100%_-_8px)] before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute  rounded-none bottom-1  shadow-small ml-1 z-10">
        <article className="w-full">
          <p className=" text-xl  text-white">Desk</p>
          <p className=" text-small font-bold text-white">$1000</p>
        </article>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="none"
          size="sm"
        >
          {t("seeDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
};
