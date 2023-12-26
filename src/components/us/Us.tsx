import Image from "next/image";

import React from "react";
import Link from "next/link";

import hotel from "../../../public/img/jpg/hotel.jpg";
import integrity from "../../../public/img/jpg-end/integrity.jpg";
import innovation from "../../../public/img/jpg-end/innovation.jpg";
import quality from "../../../public/img/jpg-end/quality.jpg";
import customer from "../../../public/img/jpg-end/customer.jpg";
import interior from "../../../public/img/jpg-end/interior-design.jpg";
import remodeling from "../../../public/img/jpg-end/remodeling.jpg";

import { ContactUs } from "./ContactUs";

export const Us = ({ translations }: { translations: any }) => {
  return (
    <React.Fragment>
      <article className="flex flex-col w-full gap-5 items-center py-4 md:p-16">
        <h4 className="text-3xl text-justify font-bold text-master-900/70 uppercase">
          {translations.whoWeAre}
        </h4>
        <p className="italic px-4 md:px-10 text-justify text-2xl">
          <span className="text-3xl font-bold mr-1 text-master-900/70">
            {translations.whoWeAreDescription1}
          </span>
          {translations.whoWeAreDescription2}
        </p>
      </article>
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-10 md:mx-30">
          <div className="relative h-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={integrity}
              alt="home"
            />
            <div className="text-white font-bold absolute grid top-0 group h-full  w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/70">
              <span className="italic text-xl text-center uppercase group-hover:hidden">
                {translations.value1}
              </span>
              <p className="hidden group-hover:block transition-all duration-500 p-5 text-xl text-justify">
                {translations.value1Description}
              </p>
            </div>
          </div>
          <div className="relative  h-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={innovation}
              alt="home"
            />
            <div className="text-white font-bold absolute grid top-0 group h-full   w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/70">
              <span className="italic text-xl text-center uppercase group-hover:hidden transition-all duration-500">
                {translations.value2}
              </span>
              <p className="hidden group-hover:block transition-all duration-500 p-5 text-xl text-justify">
                {translations.value2Description}
              </p>
            </div>
          </div>
          <div className="relative  h-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={quality}
              alt="home"
            />
            <div className="text-white font-bold absolute grid top-0 h-full group  w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/70">
              <span className="italic text-xl text-center uppercase group-hover:hidden transition-all duration-500">
                {translations.value3}
              </span>
              <p className="hidden group-hover:block transition-all duration-500 p-5 text-xl text-justify">
                {translations.value3Description}
              </p>
            </div>
          </div>
          <div className="relative  h-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={customer}
              alt="home"
            />
            <div className="text-white font-bold absolute grid group top-0 h-full   w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/70">
              <span className="italic text-xl  text-center uppercase group-hover:hidden transition-all duration-500">
                {translations.value4}
              </span>
              <p className="hidden group-hover:block transition-all duration-500 p-5 text-xl text-justify">
                {translations.value4Description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 md:mt-20 bg-gray-200/50 py-10  ">
        <h4 className="text-center md:text-center uppercase text-xl  md:text-3xl  font-bold text-master-900/70">
          {translations.serviceTitle}
        </h4>
        <div className="flex  flex-col md:flex-row gap-2 sm:gap-10 justify-center px-10 sm:px-20 mt-10">
          <Link
            href={""}
            className="relative  h-[550px] w-full md:w-[350px] cursor-pointer"
          >
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={interior}
              alt="home"
            />
            <div className="text-white py-10 font-bold absolute flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-xl text-center font-bold uppercase text-white w-full ">
                {translations.design}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5"></div>
            </div>
          </Link>
          <Link href={""} className="relative  h-[550px] w-full md:w-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={remodeling}
              alt="home"
            />
            <div className="text-white py-10 font-bold absolute flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-xl text-center uppercase font-bold text-white w-full ">
                {translations.remodeling}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5 "></div>
            </div>
          </Link>
          <Link href={""} className="relative  h-[550px] w-full md:w-[350px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={hotel}
              alt="home"
            />
            <div className="text-white font-bold absolute py-10 flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-xl text-center uppercase font-bold text-white w-full ">
                {translations.achitecture}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5"></div>
            </div>
          </Link>
        </div>
      </section>

      <ContactUs translations={translations} />
    </React.Fragment>
  );
};
