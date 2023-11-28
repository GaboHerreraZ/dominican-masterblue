"use client";
import { WhatsAppLink } from "@/app/utils/iconsUtils";
import { ReactNode } from "react";
import Navigation from "@/app/components/navigation/navigation";
import { Footer } from "@/app/components/footer/footer";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

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
        <>
          <Toaster position="top-right" />
          {children}
        </>
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
