import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { getTranslation } from "@/i18n";
import { IoLogoWhatsapp } from "react-icons/io";

export const WhatsAppLink = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng);
  return (
    <Tooltip
      key="left"
      showArrow={true}
      placement="left"
      content={t("whatsapp")}
    >
      <Link
        href={`https://api.whatsapp.com/send?phone=18299604730&text=Hola+Dominican+MasterBlue,+quiero+tener+más+información`}
        target="_blank"
        className="fixed bottom-5 right-10 animate-bounce z-50 text-[#67C15E]"
      >
        <IoLogoWhatsapp size={40} />
      </Link>
    </Tooltip>
  );
};
