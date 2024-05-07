import Image from "next/image";
import { getTranslation } from "@/i18n";

export const HomeWhoWeAre = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="flex border-l-4 border-gold  mx-auto max-w-[1000px] my-10 px-5  ">
      <div className="w-full lg:w-2/3 ">
        <div className="flex w-full">
          <h1 className="text-8xl intersect:animate-fade-down intersect:animate-duration-700  w-1/2 font-bold text-gold ">
            {t("whoWeAre")}
          </h1>
        </div>
        <p className="mt-5 pr-5 text-lg intersect:animate-fade-down intersect:animate-duration-1000">
          <span className="font-bold text-xl">{t("whoWeAreDescription1")}</span>
          {t("whoWeAreDescription2")}
        </p>
      </div>
      <div className="w-1/3 hidden md:block   relative intersect:animate-fade animate-duration-700 ">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/lamps.webp?t=2024-05-03T19%3A05%3A00.758Z"
          alt="Logo Dominican Masterblue"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
