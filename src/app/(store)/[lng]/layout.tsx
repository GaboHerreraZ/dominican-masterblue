import {
  DesktopNavbar,
  MobileNavbar,
  NavbarCategory,
  Footer,
} from "@/components";
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
      default: `${t("home")} | Dominican MasterBlue`,
    },
    description: t("description"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function ShopLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <main className="w-full min-h-screen">
      <DesktopNavbar lng={lng} />
      <MobileNavbar lng={lng} />
      <NavbarCategory lng={lng} />
      {children}
      <Footer lng={lng} />
    </main>
  );
}
