import { DesktopNavbar, MobileNavbar, NavbarCategory } from "@/components";

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
    </main>
  );
}
