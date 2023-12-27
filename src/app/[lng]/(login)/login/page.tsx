import { Login } from "@/components/login";
import GetTranslations from "@/utils/translationsPage";

export default async function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { getLoginTranslations } = GetTranslations();

  const translations = await getLoginTranslations(lng);
  return <Login translations={translations} />;
}
