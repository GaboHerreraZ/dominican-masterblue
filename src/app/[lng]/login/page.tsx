import { Login } from "@/app/components/login/login";
import { useTranslation } from "@/app/i18n";
import GetTranslations from "@/app/utils/translationsPage";

export default async function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { GetLoginTranslations } = GetTranslations();

  const translations = await GetLoginTranslations(lng);

  return <Login translations={translations} />;
}
