import { FacebookIcon, InstagramIcon } from "@/app/utils/iconsUtils";
import GetTranslations from "@/app/utils/translationsPage";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";

export const Footer = async ({ lng }: { lng: string }) => {
  const { GetFooterTranslations } = await GetTranslations();
  const translations = await GetFooterTranslations(lng);

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
          <p className="py-1 text-slate-400">+52 31255525</p>
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
          <p className="py-1 text-slate-400">
            <Link href={`/nosotros`}>{translations.whoWeAre}</Link>
          </p>
          <p className="py-1 text-slate-400">
            <Link href={"/productos"}>{translations.ourProducts}</Link>
          </p>
          <p className="py-1 text-slate-400">{translations.ourServices}</p>
        </article>
        <article className="text-white px-1 md:px-10">
          <h4 className="font-bold self-start py-10 uppercase">
            {translations.meetUs}
          </h4>
          <p className="py-1 text-slate-400">
            <Link href={"/contacto"}>{translations.doYouNeedHelp}</Link>
          </p>
          <p className="py-1 text-slate-400">dominicanmasterblue@gmail.com</p>
          <div className="flex gap-2">
            <FacebookIcon fill="#ffffff" size={30} />
            <InstagramIcon fill="#ffffff" size={0} />
          </div>
        </article>
      </section>
      <Divider className="my-2 w-full bg-slate-400" />
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
