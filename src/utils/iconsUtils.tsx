import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useTranslation } from "@/i18n";
import { IoLogoWhatsapp } from "react-icons/io";

export const WhatsAppLink = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  return (
    <Tooltip
      key="left"
      showArrow={true}
      placement="left"
      content={t("whatsapp")}
    >
      <Link
        href=""
        target="_blank"
        className="fixed bottom-5 right-10 animate-bounce z-50 text-[#67C15E]"
      >
        <IoLogoWhatsapp size={40} />
      </Link>
    </Tooltip>
  );
};
