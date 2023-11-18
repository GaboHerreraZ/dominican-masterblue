import { useTranslation } from "@/app/i18n";
import { Button } from "@nextui-org/button";
import Image from "next/legacy/image";
import render from "../../../../public/img/jpg/render.jpg";
import desing from "../../../../public/img/jpg/design.jpg";
import kitchen from "../../../../public/img/jpg/restore-kitchen.jpg";

export const HomeServices = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="mt-5">
      <section className="w-full mt-5 p-5 md:p-10 ">
        <p className="italic text-center m-0 text-4xl ">
          {t("serviceDescription")}
        </p>
        <h4 className="mb-7 m-0 text-center font-bold text-2xl text-master-900/70">
          {t("service")}
        </h4>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 h-full">
        <div className="flex justify-center relative">
          <Image
            alt="imagen-prueba"
            className="absolute hover:scale-110  transition-all duration-500 ease-in-out "
            src={desing}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <article className="flex flex-col px-10 items-center justify-center bg-gray-200/50 ">
          <div className="mt-10 md:m-0">
            <p className="text-2xl uppercase text-center mb-5 text-master-900/70 font-bold">
              {t("interiorDesign")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("interiorDesingDescriptions")}
            </p>
          </div>
          <div className=" text-center mt-5">
            <Button
              disableRipple
              className="master-button"
              size="sm"
              color="primary"
              radius="none"
              variant="bordered"
            >
              {t("seeMore")}
            </Button>
          </div>
        </article>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1  h-full">
        <article className="flex flex-col px-10 items-center justify-center bg-gray-200/50 ">
          <div className="mt-10 md:m-0">
            <p className="text-2xl uppercase text-center mb-5 text-master-900/70 font-bold">
              {t("restoration")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("restorationDescription")}
            </p>
          </div>
          <div className=" text-center mt-5">
            <Button
              disableRipple
              className="master-button"
              size="sm"
              color="primary"
              radius="none"
              variant="bordered"
            >
              {t("seeMore")}
            </Button>
          </div>
        </article>
        <div className="flex order-1 md:order-2 justify-center relative">
          <Image
            alt="imagen-prueba"
            className="absolute hover:scale-110  transition-all duration-500 ease-in-out "
            src={kitchen}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 h-full ">
        <div className="flex justify-center relative">
          <Image
            alt="imagen-prueba"
            className="absolute hover:scale-110  transition-all duration-500 ease-in-out "
            src={render}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <article className="flex flex-col px-10 items-center justify-center bg-gray-200/50 ">
          <div className="mt-10 md:m-0">
            <p className="text-2xl uppercase text-center mb-5 text-master-900/70 font-bold">
              {t("architectureRender")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("architectureRenderDescription")}
            </p>
          </div>
          <div className=" text-center mt-5">
            <Button
              disableRipple
              className="master-button"
              size="sm"
              color="primary"
              radius="none"
              variant="bordered"
            >
              {t("seeMore")}
            </Button>
          </div>
        </article>
      </section>
    </section>
  );
};
