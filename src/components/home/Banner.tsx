import { getTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

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
              className="border-[1px] border-white p-2 font-bold text-xl bg-white/40 hover:bg-white hover:text-gold transition-all duration-300 ease-in-out"
              href="/products/all"
            >
              {t("seeProducts")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
