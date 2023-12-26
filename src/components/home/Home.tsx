import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeProducts } from "@/components/home/HomeProducts";
import { ContactUs } from "../us";
import { UsTranslations } from "@/models/UsTranslations";
import GetTranslations from "@/utils/translationsPage";

export const Home = async ({ lng }: { lng: string }) => {
  const { GetUsTranslations } = GetTranslations();

  const t: UsTranslations = await GetUsTranslations(lng);

  return (
    <>
      <HomeServices lng={lng} />
      <HomeProducts lng={lng} />
      <HomeProjects lng={lng} />
      <ContactUs translations={t} />
    </>
  );
};
