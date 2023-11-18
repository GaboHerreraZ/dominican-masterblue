import { Banner } from "@/app/components/home/banner";
import { useTranslation } from "@/app/i18n";
import { SectionProjects } from "@/app/components/projects/sectionProjects";
import { HomeServices } from "@/app/components/service/homeServices";
import { HomeProducts } from "@/app/components/product/homeProducts";

export const Home = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <Banner />
      <HomeServices lng={lng} />
      <HomeProducts lng={lng} />
      <SectionProjects lng={lng} />
    </>
  );
};
