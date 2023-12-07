import { useTranslation } from "@/app/i18n";
import furniture from "../../../../public/img/jpg/restore-kitchen.jpg";
import Image from "next/image";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className="h-[800px] relative  w-full">
      <Image
        src={furniture}
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        alt="home"
        className=""
      />
      <div className="flex backdrop-contrast-150 place-items-center place-content-center  bg-gradient-to-b from-black/20 to-black/70 absolute h-full w-full">
        <div className="text-center px-4  text-white">
          <p className="text-3xl md:text-5xl font-bold mb-2">
            {t("bannerTitle")}
          </p>
          <p className="text-2xl md:text-3xl italic">
            {t("bannerDescription")}
          </p>
        </div>
      </div>
    </div>
  );
};
