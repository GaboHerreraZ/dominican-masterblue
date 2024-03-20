import { ContactForm } from "@/components";
import { getTranslation } from "@/i18n";

export default async function ContactPage({
  params: { lng },
}: {
  params: { lng: string };
}) {

  const {t} = await getTranslation(lng, "contact");

  const translations = {
    subject: t("subject"), 
    errorSubject: t("errorSubject"), 
    name: t("name"), 
    errorName: t("errorName"), 
    email: t("email"), 
    errorEmail: t("errorEmail"), 
    phone: t("phone"), 
    errorPhone: t("errorPhone"), 
    message: t("message"), 
    errorMessage: t("errorMessage"), 
    contactUsButton: t("contactUsButton"), 
    thanksForContacting: t("thanksForContacting"), 
    title: t("title"), 
    subTitle1: t("subTitle1"), 
    subTitle2: t("subTitle2"), 
  }

  // return <ContactForm />;
  return <ContactForm translations={translations}/>;
  // return <>Contact {lng}</>;
}
