import { WhatsAppLink } from "@/app/utils/iconsUtils";
import { ReactNode } from "react";
import Navigation from "@/app/components/navigation/navigation";
import { Footer } from "@/app/components/footer/footer";
export const PageLayout = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  return (
    <>
      <Navigation lng={lng} />
      {children}
      <WhatsAppLink lng={lng} />
      <Footer lng={lng} />
    </>
  );
};
