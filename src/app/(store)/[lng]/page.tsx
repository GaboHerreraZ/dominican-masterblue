import {
  FindInDominican,
  Banner,
  HomeMessage,
  HomeServices,
  HomeWhoWeAre,
} from "@/components/home";
import { SharedProjects } from "@/components/shared";

interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  return (
    <>
      <Banner lng={lng} />
      <HomeWhoWeAre lng={lng} />
      <FindInDominican lng={lng} />
      <HomeMessage lng={lng} />
      <HomeServices lng={lng} />
      <SharedProjects lng={lng} />
    </>
  );
}
