import "../globals.css";
import { ReactNode } from "react";
import { Arsenal } from "next/font/google";
import { Providers } from "../provider";
import { dir } from "i18next";
import { LoginLayout } from "@/components/layouts";

type Props = {
  children: ReactNode;
  params: { lng: string };
};

const arsenal = Arsenal({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export default function RootLayout({ children, params: { lng } }: Props) {
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
