import Image from "next/image";
import { getTranslation } from "@/i18n";
import { Honestity, Reliability, Responsability } from "@/utils/icons";

export const HomeWhoWeAre = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="flex w-100 h-[250px] md:h-[500px] my-10 z-10 justify-center m-auto container">
      <div className="relative hidden md:grid md:w-1/3">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/lamps.webp?t=2024-05-03T19%3A05%3A00.758Z"
          alt="Logo Dominican Masterblue"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full md:w-2/3 h-full flex items-center relative z-20">
        <div className="flex absolute border-l-8 border-gold  md:-left-40 p-5 flex-col z-20  bg-white/60 justify-center  mx-auto container shadow-lg ">
          <h1 className="text-5xl  intersect:animate-fade-down intersect:animate-duration-700 w-full md:w-1/2 font-bold text-gold ">
            {t("whoWeAre")}
          </h1>
          <p className="mt-2 intersect:animate-fade-down intersect:animate-duration-1000">
            <span className="font-bold">{t("whoWeAreDescription1")}</span>
            {t("whoWeAreDescription2")}
          </p>
        </div>
      </div>
    </section>
  );
};
