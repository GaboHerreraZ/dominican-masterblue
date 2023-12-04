import { Banner } from "@/app/components/home/banner";
import { SectionProjects } from "@/app/components/projects/sectionProjects";
import { HomeServices } from "@/app/components/home/homeServices";
import { HomeProducts } from "@/app/components/home/homeProducts";

export const Home = async ({ lng }: { lng: string }) => {
  return (
    <>
      <Banner />
      <HomeServices lng={lng} />
      <HomeProducts lng={lng} />
      <SectionProjects lng={lng} />
    </>
  );
};
