import { FaqsComponent } from "@/components/faqs/Faqs";
import { useTranslation } from "@/i18n";
import { Faqs } from "@/domain/model/faq";

export default async function FaqsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "faqs");

  const faqs: Faqs = {
    title: t("titleDescription"),
    description: t("title"),
    subtitle: t("subtitle"),
  };

  return <FaqsComponent faqs={faqs} />;
}
