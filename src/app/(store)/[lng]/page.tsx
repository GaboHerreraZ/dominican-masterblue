import { FindInDominican, Banner, HomeMessage } from "@/components/home";

interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  return (
    <>
      <Banner lng={lng} />
      <FindInDominican lng={lng} />
      <HomeMessage lng={lng} />
    </>
  );
}
