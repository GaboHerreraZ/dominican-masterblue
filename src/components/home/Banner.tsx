import Image from "next/image";
import Link from "next/link";

import { getTranslation } from "@/i18n";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <div className="w-full ">
      <div className="relative h-[600px]  ">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/home.webp?t=2024-05-04T14%3A03%3A13.800Z"
          fill
          style={{ objectFit: "cover" }}
          alt="Dominican master blue home"
        />
        <div className="grid items-center h-full absolute text-white  w-full ">
          <div className="mx-10 intersect:animate-fade-right intersect:animate-delay-700 ">
            <p className="font-extrabold text-4xl md:text-6xl">
              {t("bannerMessage1")}
            </p>
            <p className="font-extrabold text-4xl md:text-6xl mb-10">
              {t("bannerMessage2")}
            </p>
            <Link
              href="/products/all"
              className="bg-gold/75 px-3 py-2  hover:bg-white/75 hover:text-gold   text-white text-lg transition-all duration-700 ease-in-out"
            >
              {t("seeProducts")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
