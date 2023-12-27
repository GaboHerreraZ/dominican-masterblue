import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import GetTranslations from "@/utils/translationsPage";
import Link from "next/link";

export const Footer = async ({ lng }: { lng: string }) => {
  const { getFooterTranslations } = await GetTranslations();
  const translations = await getFooterTranslations(lng);

  return (
    <footer className="bg-[#1c2022]  w-full">
      <section className="grid grid-cols-1  justify-center md:grid-cols-4 mx-5 md:mx-40 py-20">
        <article className="px-1 md:px-10">
          <h4 className="text-white  py-10  font-bold uppercase">
            <Link href={"/"}>
              Dominican Master<span className="text-master-500">Blue</span>
            </Link>
          </h4>
          <p className="py-1 text-slate-400 text-justify ">
            {translations.description}
          </p>
        </article>
        <article className="grid text-white px-1 md:px-10 ">
          <h4 className="font-bold py-10 uppercase">{translations.contact}</h4>
          <p className="py-1 text-slate-400">+1 (829)960-4730</p>
          <p className="py-1 text-slate-400">{translations.address}</p>
          <p className="py-1 text-slate-400">
            {translations.addressDescription}
          </p>
          <h4 className="font-bold">{translations.schedule}</h4>
          <p className="py-1 text-slate-400">{translations.weekSchedule}</p>
          <p className="py-1 text-slate-400">{translations.weekendSchedule}</p>
        </article>
        <article className=" text-white px-1 md:px-10">
          <h4 className="font-bold self-start py-10 uppercase">
            <Link href={`/${lng}/nosotros`}>{translations.us}</Link>
          </h4>
          <h5 className="py-1 text-slate-400">
            <Link href={`/${lng}/nosotros`}>{translations.whoWeAre}</Link>
          </h5>
          <h5 className="py-1 text-slate-400">
            <Link href={`/${lng}/productos`}>{translations.ourProducts}</Link>
          </h5>
          <h5 className="py-1 text-slate-400">
            <Link href={`/${lng}/contacto`}>{translations.contact}</Link>
          </h5>

          <h5 className="py-1 text-slate-400">
            <Link href={`/${lng}/servicios`}>{translations.ourServices}</Link>
          </h5>
        </article>
        <article className="text-white px-1 md:px-10">
          <h4 className="font-bold self-start py-10 uppercase">
            {translations.meetUs}
          </h4>
          <p className="py-1 text-slate-400">
            <Link href={`/${lng}/contacto`}>{translations.doYouNeedHelp}</Link>
          </p>
          <p className="py-1 text-slate-400">dominicanmasterblue@gmail.com</p>
          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
              target="_blank"
              about="Facebook"
              className="text-white"
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              about="Instagram"
              className="text-white"
            >
              <AiFillInstagram size={30} />
            </Link>
          </div>
        </article>
      </section>
      <div className="border-b-1  w-full bg-slate-400"></div>
      <section>
        <p className="text-slate-400 text-small py-1 text-center">
          Designed by
          <Link
            className="ml-1 underline"
            href={"https://gabrielherrerazdev.com/"}
          >
            GabrielHerreraDev
          </Link>
        </p>
      </section>
    </footer>
  );
};
