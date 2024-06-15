import {
  FindInDominican,
  Banner,
  HomeMessage,
  HomeServices,
  HomeWhoWeAre,
  HomeProjects,
  HomeContact,
} from "@/components/home";

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
      <HomeProjects lng={lng} />
      <HomeContact />
    </>
  );
}
