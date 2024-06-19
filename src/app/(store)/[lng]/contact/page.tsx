import { ContactForm } from "@/components";
import { SharedProjects } from "@/components/shared";
import { getTranslation } from "@/i18n";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL(`https://dominicanmasterblue.com/${lng}`),
    title: {
      template: "%s | Dominican MasterBlue",
      default: `${t("titleContactUs")} | Dominican MasterBlue`,
    },
    description: t("description"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function ContactPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await getTranslation(lng, "contact");

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
    banner1: t("banner1"),
    banner2: t("banner2"),
    banner3: t("banner3"),
  };

  return (
    <>
      <ContactForm translations={translations} />
      <SharedProjects lng={lng} />
    </>
  );
}
