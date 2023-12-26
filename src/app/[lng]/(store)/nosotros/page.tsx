import { Us } from "@/components/us";
import GetTranslations from "@/utils/translationsPage";

export default async function AboutUsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { GetUsTranslations } = GetTranslations();
  const translations = await GetUsTranslations(lng);
  return <Us translations={translations} />;
}
