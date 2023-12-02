import { useTranslation } from "@/app/i18n";
import { LeftQuoteIcon, RightQuoteIcon } from "@/app/utils/iconsUtils";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import chair from "../../../../public/img/jpg/chair.jpg";
import dinningRoom from "../../../../public/img/jpg/dinning-room.jpg";
import furniture from "../../../../public/img/jpg/furniture.jpg";

export const HomeProducts = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <article className="flex flex-col py-10 px-10 items-center justify-center ">
        <p className="italic text-center m-0 text-4xl ">
          {t("productDescription")}
        </p>
        <h4 className="mb-7 m-0 text-center font-bold text-2xl">
          {t("product")}
        </h4>
        <span className="self-start">
          <LeftQuoteIcon fill="#091a7ab3" size={100} />
        </span>
        <div className="mt-10 md:m-0">
          <p className="flex italic text-xl md:text-3xl lg:text-3xl text-center">
            {t("contactDescription")}
          </p>
          <p className="text-end text-xl font-bold text-master-900/70">
            - Kelly Wearstler
          </p>
        </div>
        <span className="self-end">
          <RightQuoteIcon fill="#091a7ab3" size={100} />
        </span>
      </article>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Card
          isFooterBlurred
          radius="none"
          classNames={{
            base: "w-full",
          }}
        >
          <Link
            href={""}
            className="relative flex h-full place-content-center   w-full "
          >
            <Image
              alt="chair"
              className="absolute "
              src={chair}
              fill
              sizes="100%s"
              style={{ objectFit: "cover" }}
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("chair")}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="none"
              size="sm"
            >
              {t("seeMore")}
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="none"
          classNames={{
            base: "w-full",
          }}
        >
          <Link
            href={""}
            className="relative flex h-full place-content-center   w-full "
          >
            <Image
              alt="dinning-room"
              className="absolute "
              src={dinningRoom}
              fill
              sizes="100%s"
              style={{ objectFit: "cover" }}
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("dinningRoom")}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="none"
              size="sm"
            >
              {t("seeMore")}
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="none"
          classNames={{
            base: "w-full",
          }}
        >
          <Link
            href={""}
            className="relative flex h-full place-content-center   w-full "
          >
            <Image
              alt="furniture"
              className="absolute "
              src={furniture}
              fill
              sizes="100%s"
              style={{ objectFit: "cover" }}
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("furniture")}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="none"
              size="sm"
            >
              {t("seeMore")}
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="none"
          classNames={{
            base: "w-full",
          }}
        >
          <Link
            href={""}
            className="relative flex h-full place-content-center   w-full "
          >
            <Image
              alt="closet"
              className="absolute "
              src={furniture}
              fill
              sizes="100%s"
              style={{ objectFit: "cover" }}
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white"> {t("closet")}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="none"
              size="sm"
            >
              {t("seeMore")}
            </Button>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
};
