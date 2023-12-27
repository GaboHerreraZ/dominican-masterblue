import { getTranslation } from "@/i18n";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL(
      `https://www.dominicanmasterblue.com/${lng}/nosotros`
    ),
    title: t("titleAboutUs"),
    description: t("descriptionAboutUs"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default function UsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
