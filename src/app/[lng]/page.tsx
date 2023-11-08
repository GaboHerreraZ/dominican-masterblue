import { useTranslation } from "@/app/i18n";
import { Home as HomeDefault } from "@/app/components/home/home";
export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  console.log("lng", lng);
  const { t } = await useTranslation(lng);
  return <HomeDefault />;
}
