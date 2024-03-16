import "../globals.css";
import { ReactNode } from "react";
import { Arsenal } from "next/font/google";
import { Providers } from "../provider";
import { dir } from "i18next";
import { LoginLayout } from "@/components/layouts";
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
    metadataBase: new URL(`https://www.dominicanmasterblue.com/${lng}/login`),
    title: `${t("titleLogin")} | Dominican Master Blue`,
    description: t("descriptionLogin"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  console.log("entré", lng);

  return (
    <html
      className={`${arsenal.className} scroll-smooth`}
      lang={lng}
      dir={dir(lng)}
    >
      <body>
        <Providers>
          <LoginLayout lng={lng}>{children}</LoginLayout>
        </Providers>
      </body>
    </html>
  );
}
