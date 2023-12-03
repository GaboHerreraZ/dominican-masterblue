import { useTranslation } from "@/app/i18n";
import { Button } from "@nextui-org/button";
import Image from "next/image";
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
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:flex-row md:w-1/2 justify-center relative h-[500px]">
          <Image
            alt="imagen-prueba"
            className="transition-all duration-500 ease-in-out "
            src={desing}
            style={{ objectFit: "cover" }}
          />
        </div>
        <article className="flex flex-col w-full md:flex-row md:w-1/2  p-10  items-center justify-center bg-gray-200/50">
          <div className="text-center mt-10 md:m-0">
            <p className="text-2xl uppercase mb-5 text-master-900/70 font-bold">
              {t("interiorDesign")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("interiorDesingDescriptions")}
            </p>
            <Button
              disableRipple
              className="mt-4 master-button"
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
      <section className="flex flex-col-reverse md:flex-row">
        <article className="flex flex-col  w-full md:flex-row md:w-1/2  p-10 items-center justify-center bg-gray-200/50">
          <div className="text-center mt-10 md:m-0">
            <p className="text-2xl uppercasemb-5 text-master-900/70 font-bold">
              {t("restoration")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("restorationDescription")}
            </p>
            <Button
              disableRipple
              className="mt-4 master-button"
              size="sm"
              color="primary"
              radius="none"
              variant="bordered"
            >
              {t("seeMore")}
            </Button>
          </div>
        </article>
        <div className="flex flex-col h-[500px] w-full md:flex-row md:w-1/2 justify-center relative">
          <Image
            alt="imagen-prueba"
            className="transition-all duration-500 ease-in-out "
            src={kitchen}
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row ">
        <div className="flex flex-col h-[500px] w-full md:flex-row md:w-1/2 justify-center relative">
          <Image
            alt="imagen-prueba"
            className=" transition-all duration-500 ease-in-out "
            src={render}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <article className="flex flex-col  w-full md:flex-row md:w-1/2  p-10 items-center justify-center bg-gray-200/50">
          <div className="text-center mt-10 md:m-0">
            <p className="text-2xl uppercase text-center mb-5 text-master-900/70 font-bold">
              {t("architectureRender")}
            </p>
            <p className="flex italic text-xl md:text-2xl lg:text-2xl text-justify">
              {t("architectureRenderDescription")}
            </p>
            <Button
              disableRipple
              className="mt-4 master-button"
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
