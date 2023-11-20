import Image from "next/legacy/image";
import cocina from "../../../../public/img/jpg/cocina.jpg";
import oficina from "../../../../public/img/jpg/oficina.jpg";
import vivienda from "../../../../public/img/jpg/vivienda.jpg";
import hotel from "../../../../public/img/jpg/hotel.jpg";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export const SectionProjects = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className="py-20 bg-gray-200/50">
      <p className="italic text-center m-0 text-4xl ">
        {t("projectDescription")}
      </p>
      <h4 className="mb-7 m-0 text-center font-bold text-2xl text-master-900/70">
        {t("projectTitle")}
      </h4>
      <section className="flex flex-col  md:flex-row  justify-between w-full md:h-60">
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
              alt="kitchen"
              className="absolute "
              src={cocina}
              layout="intrinsic"
              objectFit="cover"
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("kitchen")}</p>
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
              alt="office"
              className="absolute "
              src={oficina}
              layout="intrinsic"
              objectFit="cover"
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("office")}</p>
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
              alt="house"
              className="absolute "
              src={vivienda}
              layout="intrinsic"
              objectFit="cover"
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("house")}</p>
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
              alt="hotel"
              className="absolute "
              src={hotel}
              layout="intrinsic"
              objectFit="cover"
            />
          </Link>
          <CardFooter className="justify-between before:bg-white/25 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-xl font-bold text-white">{t("hotel")}</p>
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
    </div>
  );
};