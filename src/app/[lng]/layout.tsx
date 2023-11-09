import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dir } from "i18next";
import { Arsenal } from "next/font/google";
import React from "react";
import { Providers } from "./provider";
import Navigation from "@/app/components/navigation/navigation";
import { WhatsAppLink } from "@/app/utils/iconsUtils";

const arsenal = Arsenal({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const languages = ["en", "es"];

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
  console.log("locale", lng);
  return (
    <html
      className={`${arsenal.className} scroll-smooth`}
      lang={lng}
      dir={dir(lng)}
    >
      <body>
        <Providers>
          <Navigation lng={lng} />
          {children}
          <WhatsAppLink lng={lng} />
        </Providers>
      </body>
    </html>
  );
}
