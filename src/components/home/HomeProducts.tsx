import { getTranslation } from "@/i18n";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import chair from "../../../public/img/jpg/chair.jpg";
import dinningRoom from "../../../public/img/jpg/dinning-room.jpg";
import furniture from "../../../public/img/jpg/furniture.jpg";

export const HomeProducts = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 ">
      <article className="flex flex-col my-10 md:px-24 md:mx-24 items-center justify-center ">
        <p className="italic text-center m-0 text-4xl ">
          {t("productDescription")}
        </p>
        <h4 className="mb-7 m-0 text-center font-bold text-2xl">
          {t("product")}
        </h4>
        <span className="self-start text-master-900/70">
          <FaQuoteLeft size={50} />
        </span>
        <div className="mt-10 md:m-0">
          <p className="flex italic text-xl md:text-3xl lg:text-3xl text-center">
            {t("contactDescription")}
          </p>
          <p className="text-end text-xl font-bold text-master-900/70">
            - Kelly Wearstler
          </p>
        </div>
        <span className="self-end text-master-900/70">
          <FaQuoteRight size={50} />
        </span>
      </article>
      <section className="grid grid-cols-1 gap-0 md:px-24 md:mx-24  md:gap-10 md:grid-cols-2">
        <Card
          isFooterBlurred
          radius="none"
          classNames={{
            base: "w-full h-[350px]",
          }}
        >
          <Link href={""} className="relative flex place-content-center h-full">
            <Image
              alt="chair"
              className="absolute "
              src={chair}
              fill
              sizes="100%"
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
            base: "w-full h-[350px]",
          }}
        >
          <Link href={""} className="relative flex h-full place-content-center">
            <Image
              alt="dinning-room"
              className="absolute "
              src={dinningRoom}
              fill
              sizes="100%"
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
            base: "w-full h-[350px]",
          }}
        >
          <Link
            href={""}
            className="relative flex h-full place-content-center "
          >
            <Image
              alt="furniture"
              className="absolute "
              src={furniture}
              fill
              sizes="100%"
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
            base: "w-full h-[350px]",
          }}
        >
          <Link href={""} className="relative flex h-full place-content-center">
            <Image
              alt="closet"
              className="absolute "
              src={furniture}
              fill
              sizes="100%"
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
