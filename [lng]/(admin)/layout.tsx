import "../globals.css";
import { ReactNode } from "react";
import { Arsenal } from "next/font/google";
import { Providers } from "../provider";
import { dir } from "i18next";
import { ProtectedRoute } from "@/components/layouts";
import GetTranslations from "@/utils/translationsPage";
import { DashBoardLayout } from "@/components/dashboard/layout/DashBoardLayout";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

type Props = {
  children: ReactNode;
  params: { lng: string };
};

const languages = ["en", "es"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const arsenal = Arsenal({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL(
      `https://www.dominicanmasterblue.com/${lng}/dashboard`
    ),
    title: t("titleDashboard") + " | Dominican Master Blue",
    description: t("descriptionDashboard"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function RootLayout({ children, params: { lng } }: Props) {
  const { getDashboardTranslations } = GetTranslations();

  const translations = await getDashboardTranslations(lng);

  return (
    <html
      className={`${arsenal.className} scroll-smooth antialiased`}
      lang={lng}
      dir={dir(lng)}
    >
      <body>
        <ProtectedRoute>
          <Providers>
            <Toaster position="top-right" />
            <DashBoardLayout lng={lng} translations={translations}>
              {children}
            </DashBoardLayout>
          </Providers>
        </ProtectedRoute>
      </body>
    </html>
  );
}
