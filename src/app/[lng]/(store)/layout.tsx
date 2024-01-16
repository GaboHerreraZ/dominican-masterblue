import "../globals.css";
import { dir } from "i18next";
import { Arsenal } from "next/font/google";
import React from "react";
import { Providers } from "../provider";
import { WhatsAppLink } from "@/utils/iconsUtils";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navigation/navbar/Nabvar";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

const arsenal = Arsenal({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const languages = ["en", "es"];

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL("https://www.dominicanmasterblue.com"),
    title: {
      default: "Dominican MasterBlue",
      template: "%s | Dominican MasterBlue",
    },
    description: t("description"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      className={`${arsenal.className} scroll-smooth antialiased`}
      lang={lng}
      dir={dir(lng)}
    >
      <body className="">
        <NavBar lng={lng} />
        <Providers>
          {children}
          <WhatsAppLink lng={lng} />
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
}
