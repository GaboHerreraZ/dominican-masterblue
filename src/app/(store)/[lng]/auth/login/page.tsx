import { LoginForm } from "@/components/login/LoginForm";
import { getTranslation } from "@/i18n";

export default async function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {

  const { t } = await getTranslation(lng, "login");

  const translations = {
    title: t("title"),
    subTitle: t("subTitle"),
    emailPlaceHolder: t("emailPlaceHolder"),
    errorEmail: t("errorEmail"),
    passwordPlaceHolder: t("passwordPlaceHolder"),
    errorPassword: t("errorPassword"),
    login: t("login"),
    invalidLogin: t("invalidLogin"),
  }

  return <LoginForm translations={translations}/>;
}
