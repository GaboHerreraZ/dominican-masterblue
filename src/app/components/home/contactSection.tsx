import Image from "next/legacy/image";
import interiores from "../../../../public/img/png/interiores.png";
import { Button } from "@nextui-org/button";
import { LeftQuoteIcon, RightQuoteIcon } from "@/app/utils/iconsUtils";
import { useTranslation } from "@/app/i18n";

export const ContactSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="py-5 bg-red-50">
      <section className="flex flex-col h-full md:flex-row ">
        <div className="flex justify-center relative">
          <Image
            alt="imagen-prueba"
            className="absolute hover:scale-110  transition-all duration-500 ease-in-out "
            src={interiores}
            layout="intrinsic"
            objectFit="cover"
          />
          <div className="absolute text-center  bottom-5">
            <p className="text-2xl mb-5 text-white">{t("contactTitle")}</p>
            <Button color="default" variant="bordered">
              {t("contact")}
            </Button>
          </div>
        </div>
        <article className="flex items-center justify-center ">
          <span className="self-start">
            <LeftQuoteIcon fill="current" size={100} />
          </span>
          <div className="mt-10 md:m-0">
            <p className="flex italic text-xl md:text-3xl lg:text-3xl text-center">
              {t("contactDescription")}
            </p>
            <p className="text-end text-xl font-bold">- Kelly Wearstler</p>
          </div>
          <span className="self-end">
            <RightQuoteIcon fill="current" size={100} />
          </span>
        </article>
      </section>
    </section>
  );
};
