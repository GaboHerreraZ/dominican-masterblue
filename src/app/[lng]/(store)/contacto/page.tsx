import { ContactForm } from "@/components/contact/Contact";
import GetTranslations from "@/utils/translationsPage";
import { Suspense } from "react";

const getContactTranslation = async (lng: string) => {
  const { getContactTranslations } = GetTranslations();
  return await getContactTranslations(lng);
};

export default async function Contact({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const translations = await getContactTranslation(lng);

  return (
    <section className=" mx-10 sm:mx-40 my-10 sm:my-20 flex flex-col gap-4">
      <h1 className="text-center font-bold text-master text-3xl uppercase">
        {translations.title}
      </h1>
      <h3 className="text-center font-bold text-master text-xl">
        {translations.subTitle}
      </h3>
      <p className="text-xl text-slate-400 text-center mx-5 sm:mx-20 ">
        {translations.description}
      </p>
      <Suspense>
        <ContactForm translations={translations} lng={lng} />
      </Suspense>
    </section>
  );
}
