"use client";
import { WhatsAppLink } from "@/app/utils/iconsUtils";
import { ReactNode } from "react";
import Navigation from "@/app/components/navigation/navigation";
import { Footer } from "@/app/components/footer/footer";
import { usePathname } from "next/navigation";
import { DashBoardLayout } from "@/app/components/dashboard/dashBoardLayout";

export const PageLayout = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  const path = usePathname();

  return (
    <>
      {path.includes("login") || path.includes("dashboard") ? (
        <DashBoardLayout lng={lng}>{children}</DashBoardLayout>
      ) : (
        <>
          <Navigation lng={lng} />
          {children}
          <WhatsAppLink lng={lng} />
          <Footer lng={lng} />
        </>
      )}
    </>
  );
};