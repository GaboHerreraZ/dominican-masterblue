import { FindInDominican, Banner } from "@/components/home";

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
    </>
  );
}
