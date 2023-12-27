import { Us } from "@/components/us";
import GetTranslations from "@/utils/translationsPage";

export default async function AboutUsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { getUsTranslations, getContactTranslations } = GetTranslations();
  const translationsPromise = getUsTranslations(lng);
  const contacttranslationsPromise = getContactTranslations(lng);

  const [translations, contactTranslations] = await Promise.all([
    translationsPromise,
    contacttranslationsPromise,
  ]);

  return (
    <Us translations={translations} contactTranslations={contactTranslations} />
  );
}
