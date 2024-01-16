import React from "react";

import { ContactUs } from "./ContactUs";
import { UsTranslations } from "@/models/usTranslations";
import { ContactTranslations } from "@/models/contactTranslations";
import { SERVICES, VALUES } from "@/utils/const";
import { UsService } from "./UsService";
import { UsValues } from "./UsValues";

export const Us = ({
  translations,
  lng,
  contactTranslations,
}: {
  translations: UsTranslations;
  lng: string;
  contactTranslations: ContactTranslations;
}) => {
  return (
    <React.Fragment>
      <article className="flex flex-col w-full gap-5 items-center bg-master-secondary py-4 md:p-16">
        <h1 className="text-3xl text-justify font-bold text-white uppercase">
          {translations.whoWeAre}
        </h1>
        <p className="italic px-4 md:px-10 text-slate-400 text-2xl">
          <span className="text-3xl font-bold mr-1 text-white">
            {translations.whoWeAreDescription1}
          </span>
          {translations.whoWeAreDescription2}
        </p>
      </article>
      <section className="my-20 ">
        <h1 className="text-3xl text-center my-20 font-bold text-master-900/70 uppercase">
          {translations.ourValues}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-10 px-0 md:px-20">
          {VALUES.map((value, idx) => (
            <UsValues key={idx} lng={lng} {...value} />
          ))}
        </div>
      </section>
      <section className="mt-10 md:mt-20  py-10  ">
        <h1 className="text-center  uppercase text-2xl  md:text-4xl  font-bold text-master-900/70">
          {translations.serviceTitle}
        </h1>
        <p className=" text-slate-400 text-2xl text-center py-5">
          {translations.servicesDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-2 justify-center   mt-10">
          {SERVICES.map((service, idx) => (
            <UsService key={idx} lng={lng} service={service} />
          ))}
        </div>
      </section>

      <ContactUs translations={contactTranslations} />
    </React.Fragment>
  );
};
