import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeProducts } from "@/components/home/HomeProducts";
import { ContactUs } from "../us";
import GetTranslations from "@/utils/translationsPage";
import { ContactTranslations } from "@/models/contactTranslations";

export const Home = async ({ lng }: { lng: string }) => {
  const { getContactTranslations } = GetTranslations();

  const t: ContactTranslations = await getContactTranslations(lng);

  return (
    <>
      <HomeServices lng={lng} />
      <HomeProducts lng={lng} />
      <HomeProjects lng={lng} />
      <ContactUs translations={t} />
    </>
  );
};
