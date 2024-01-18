import { ContactTranslations } from "@/models/contactTranslations";
import Link from "next/link";

export const EmailSuccess = ({
  translations,
  lng,
}: {
  translations: ContactTranslations;
  lng: string;
}) => {
  return (
    <div className="flex flex-col gap-4 my-20 items-center justify-center">
      <h1 className="font-bold text-success-500 uppercase text-3xl">
        {translations.thanksForContacting}
      </h1>
      <h3 className="font-bold text-2xl text-slate-400">
        {translations.contactSoon}
      </h3>
      <h3 className="text-slate-400 text-xl">{translations.whileContacting}</h3>
      <div className="flex gap-2 flex-col sm:flex-row">
        <Link
          className="bg-master-900/70 text-white px-5 py-2"
          href={`/${lng}/productos`}
        >
          {translations.seeProducts}
        </Link>
      </div>
    </div>
  );
};
