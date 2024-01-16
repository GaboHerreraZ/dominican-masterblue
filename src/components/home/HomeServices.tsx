import { getTranslation } from "@/i18n";
import React from "react";
import { HomeServiceRight } from "./HomeServiceRight";
import { HomeServiceLeft } from "./HomeServiceLeft";
import { SERVICES } from "@/utils/const";

export const HomeServices = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="mt-5">
      <h1 className="w-full pt-4 mt-10  italic text-center m-0 text-5xl ">
        {t("serviceDescription")}
      </h1>
      <h4 className="mb-10 m-0 text-center font-bold text-2xl text-master-900/70">
        {t("service")}
      </h4>

      {SERVICES.map((service, idx) => {
        return (
          <>
            {service.right ? (
              <HomeServiceRight key={idx} lng={lng} service={service} />
            ) : (
              <HomeServiceLeft key={idx} lng={lng} service={service} />
            )}
          </>
        );
      })}
    </section>
  );
};
