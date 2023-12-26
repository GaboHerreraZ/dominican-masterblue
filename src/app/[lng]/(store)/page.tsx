import { Home as HomeDefault } from "@/components/home";
export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return <HomeDefault lng={lng} />;
}
