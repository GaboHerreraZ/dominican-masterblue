import { FaqsComponent } from "@/app/components/faqs/faqs";
import { useTranslation } from "@/app/i18n";
import { Faqs } from "@/domain/model/faq";

export default async function FaqsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  console.log(lng);
  const { t } = await useTranslation(lng, "faqs");

  const faqs: Faqs = {
    title: t("titleDescription"),
    description: t("title"),
  };

  return <FaqsComponent faqs={faqs} />;
}
