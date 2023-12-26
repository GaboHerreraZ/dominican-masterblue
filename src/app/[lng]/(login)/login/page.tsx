import { Login } from "@/components/login";
import GetTranslations from "@/utils/translationsPage";

export default async function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { GetLoginTranslations } = GetTranslations();

  const translations = await GetLoginTranslations(lng);
  return <Login translations={translations} />;
}
