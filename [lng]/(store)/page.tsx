import { Home as HomeDefault } from "@/components/home";
export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  console.log(1, lng);
  // return <HomeDefault lng={lng} />;
  return <>hola</>;
}
