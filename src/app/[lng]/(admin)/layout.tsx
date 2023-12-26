import "../globals.css";
import { ReactNode } from "react";
import { Arsenal } from "next/font/google";
import { Providers } from "../provider";
import { dir } from "i18next";
import { ProtectedRoute } from "@/components/layouts";
import GetTranslations from "@/utils/translationsPage";
import { DashBoardLayout } from "@/components/dashboard/layout/DashBoardLayout";
import { Toaster } from "react-hot-toast";

type Props = {
  children: ReactNode;
  params: { lng: string };
};

const arsenal = Arsenal({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export default async function RootLayout({ children, params: { lng } }: Props) {
  const { GetDashboardTranslations } = GetTranslations();

  const translations = await GetDashboardTranslations(lng);

  return (
    <html
      className={`${arsenal.className} scroll-smooth`}
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
