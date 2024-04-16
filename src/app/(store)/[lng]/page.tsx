import { FindInDominican, Banner } from "@/components/home";

interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  return (
    <>
      <Banner />
      <FindInDominican lng={lng} />
    </>
  );
}
