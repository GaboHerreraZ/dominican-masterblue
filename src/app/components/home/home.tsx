import { Banner } from "@/app/components/home/banner";
import { HomeProjects } from "@/app/components/home/homeProjects";
import { HomeServices } from "@/app/components/home/homeServices";
import { HomeProducts } from "@/app/components/home/homeProducts";

export const Home = async ({ lng }: { lng: string }) => {
  return (
    <>
      <Banner lng={lng} />
      <HomeServices lng={lng} />
      <HomeProducts lng={lng} />
      <HomeProjects lng={lng} />
    </>
  );
};
