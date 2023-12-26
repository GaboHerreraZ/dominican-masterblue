import { getTranslation } from "@/i18n";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import render from "../../../public/img/jpg/render.jpg";
import desing from "../../../public/img/jpg/design.jpg";
import kitchen from "../../../public/img/jpg/restore-kitchen.jpg";
import React from "react";

export const HomeServices = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  const tipsServices = {
    design: {
      title: t("tipsDesignTitle"),
      tips: [
        {
          title: t("tipsDesign1"),
          description: t("tipsDesign1Description"),
        },
        {
          title: t("tipsDesign2"),
          description: t("tipsDesign2Description"),
        },
        {
          title: t("tipsDesign3"),
          description: t("tipsDesign3Description"),
        },
        {
          title: t("tipsDesign4"),
          description: t("tipsDesign4Description"),
        },
      ],
    },
    remodelation: {
      title: t("tipsRemodelationTitle"),
      tips: [
        {
          title: t("tipsRemodelation1"),
          description: t("tipsRemodelation1Description"),
        },
        {
          title: t("tipsRemodelation2"),
          description: t("tipsRemodelation2Description"),
        },
        {
          title: t("tipsRemodelation3"),
          description: t("tipsRemodelation3Description"),
        },
        {
          title: t("tipsRemodelation4"),
          description: t("tipsRemodelation4Description"),
        },
      ],
    },
  };

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
      <section className="flex h-[500px] flex-col md:flex-row">
        <div className="flex flex-col h-full w-full md:flex-row md:w-2/3 justify-center relative">
          <Image
            alt="imagen-prueba"
            className="transition-all duration-500 ease-in-out "
            src={desing}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
          <div className="bg-gradient-to-b from-transparent to-black/70 absolute h-full w-full"></div>
        </div>
        <article className="flex flex-col w-full  md:w-1/3 p-4 md:p-10   justify-center">
          <p className="text-xl before:content-['<<'] after:content-['>>'] uppercase mb-5 text-center font-bold text-master-900/70">
            {t("interiorDesign")}
          </p>
          <p className="flex italic text-xl  md:p-8 md:text-xl lg:text-xl text-justify">
            {t("interiorDesingDescriptions")}
          </p>
          <Button
            disableRipple
            className="m-4 self-center master-button"
            size="sm"
            color="primary"
            radius="none"
            variant="solid"
          >
            {t("seeMore")}
          </Button>
        </article>
      </section>
      <section className="flex h-[500px] flex-col-reverse md:flex-row">
        <article className="flex flex-col justify-center  w-full  md:w-1/3 p-4  md:p-10   ">
          <p className="text-2xl before:content-['<<'] after:content-['>>'] uppercase mb-5 text-master-900/70 text-center font-bold">
            {t("restoration")}
          </p>
          <p className="flex italic text-xl  md:p-8 md:text-xl lg:text-xl text-justify">
            {t("restorationDescription")}
          </p>
          <Button
            disableRipple
            className="m-4 self-center master-button"
            size="sm"
            color="primary"
            radius="none"
            variant="solid"
          >
            {t("seeMore")}
          </Button>
        </article>
        <div className="flex flex-col h-full  w-full md:flex-row md:w-2/3 justify-center relative">
          <Image
            alt="imagen-prueba"
            className="transition-all duration-500 ease-in-out "
            src={kitchen}
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="bg-gradient-to-b from-transparent to-black/70 absolute h-full w-full"></div>
        </div>
      </section>
      <section className="flex h-[500px] flex-col md:flex-row ">
        <div className="flex flex-col h-full  w-full md:flex-row md:w-2/3 justify-center relative">
          <Image
            alt="imagen-prueba"
            className=" transition-all duration-500 ease-in-out "
            src={render}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
          <div className="bg-gradient-to-b from-transparent to-black/70 absolute h-full w-full"></div>
        </div>
        <article className="flex flex-col  w-full  md:w-1/3 p-4 md:p-10   justify-center">
          <p className="text-2xl before:content-['<<'] after:content-['>>'] uppercase mb-5 text-master-900/70 text-center font-bold">
            {t("architectureRender")}
          </p>
          <p className="flex italic text-xl md:p-8 md:text-xl lg:text-xl text-justify">
            {t("architectureRenderDescription")}
          </p>
          <Button
            disableRipple
            className="m-4 self-center master-button"
            size="sm"
            color="primary"
            radius="none"
            variant="solid"
          >
            {t("seeMore")}
          </Button>
        </article>
      </section>
    </section>
  );
};
