import Image from "next/image";
import furniture from "../../../../public/img/jpg/restore-kitchen.jpg";
import cocina from "../../../../public/img/jpg/cocina.jpg";
import design from "../../../../public/img/jpg/design.jpg";
import hotel from "../../../../public/img/jpg/hotel.jpg";
import React from "react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { ContactUs } from "./contactUs";
import GetTranslations from "@/app/utils/translationsPage";

export const Us = async ({ lng }: { lng: string }) => {
  const { GetUsTranslations } = GetTranslations();
  const translations = await GetUsTranslations(lng);

  return (
    <React.Fragment>
      <div className="h-[700px] relative  w-full">
        <Image
          src={furniture}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          alt="home"
          className=""
        />
        <div className="flex backdrop-contrast-150  place-items-center place-content-center  bg-gradient-to-b from-black/20 to-black/70 absolute h-full w-full">
          <div className="text-center px-4  text-white">
            <p className="text-3xl md:text-5xl font-bold mb-2">
              {translations.bannerTitle}
            </p>
            <p className="text-2xl md:text-3xl italic">
              {translations.bannerDescription}
            </p>
          </div>
        </div>
      </div>
      <article className="flex flex-col w-full gap-5 items-center py-4 md:p-16">
        <h4 className="text-3xl text-justify font-bold text-master-900/70 uppercase">
          {translations.whoWeAre}
        </h4>
        <p className="italic px-1 md:px-10 text-justify text-2xl">
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
              src={furniture}
              alt="home"
              className="lg:rounded-tl-[100px] lg:rounded-br-[100px]  "
            />
            <div className="text-white font-bold absolute grid top-0 group h-full lg:rounded-tl-[100px] lg:rounded-br-[100px] w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/90">
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
              src={cocina}
              alt="home"
              className="lg:rounded-tr-[100px] lg:rounded-bl-[100px]"
            />
            <div className="text-white font-bold absolute grid top-0 group h-full lg:rounded-tr-[100px] lg:rounded-bl-[100px] w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/90">
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
              src={design}
              alt="home"
              className="lg:rounded-tl-[100px] lg:rounded-br-[100px]"
            />
            <div className="text-white font-bold absolute grid top-0 h-full group lg:rounded-tl-[100px] lg:rounded-br-[100px] w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/90">
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
              src={hotel}
              alt="home"
              className="lg:rounded-tr-[100px] lg:rounded-bl-[100px]"
            />
            <div className="text-white font-bold absolute grid group top-0 h-full lg:rounded-tr-[100px] lg:rounded-bl-[100px] w-full backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/30 to-black/90">
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
      <Divider className="my-10" />
      <section className="mt-10 md:mt-20  ">
        <h4 className="text-center md:text-center uppercase text-xl  md:text-3xl  font-bold text-master-900/70">
          {translations.serviceTitle}
        </h4>
        <div className="flex flex-col md:flex-row gap-10 justify-center px-20 mt-10">
          <div className="relative  h-[450px] w-full md:w-[250px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={cocina}
              alt="home"
            />
            <div className="text-white font-bold absolute flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-lg text-center font-bold text-white w-full ">
                {translations.design}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5"></div>
              <Link
                className="border-1 w-14 text-[10px] self-center text-center mb-10"
                href={""}
              >
                {translations.seeMore}
              </Link>
            </div>
          </div>
          <div className="relative  h-[450px] w-full md:w-[250px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={design}
              alt="home"
            />
            <div className="text-white font-bold absolute flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-lg text-center font-bold text-white w-full ">
                {translations.remodeling}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5 "></div>
              <Link
                className="border-1 w-14 text-[10px] self-center text-center mb-10"
                href={""}
              >
                {translations.seeMore}
              </Link>
            </div>
          </div>
          <div className="relative  h-[450px] w-full md:w-[250px] ">
            <Image
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              src={hotel}
              alt="home"
            />
            <div className="text-white font-bold absolute flex flex-col justify-end   group top-0 h-full  w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black/70">
              <h3 className="text-lg text-center font-bold text-white w-full ">
                {translations.achitecture}
              </h3>
              <div className="border-t-4 h-2 self-center border-white w-5"></div>
              <Link
                className="border-1 w-14 text-[10px] self-center text-center mb-10"
                href={""}
              >
                {translations.seeMore}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-10" />

      <section className="relative h-[1000px] md:h-[650px]">
        <Image
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          src={design}
          alt="home"
        />
        <div className="w-full py-24 h-full absolute backdrop-contrast-150  bg-gradient-to-b from-black/40 to-black/80  grid grid-cols-1 md:grid-cols-2 items-center  justify-center ">
          <article className="font-bold text-white ">
            <p className="text-4xl px-20 text-justify">
              {translations.contactDescription}
            </p>
            <p className="text-5xl mt-5 px-20  text-center">
              {translations.contactInvitation}
            </p>
          </article>
          <div className="px-10 md:px-20">
            <ContactUs translations={translations} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
