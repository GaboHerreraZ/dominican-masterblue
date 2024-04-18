import { getTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <div className="w-full ">
      <div className="relative h-[700px]  ">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/home2.jpg?t=2024-04-15T21%3A14%3A50.686Z"
          fill
          style={{ objectFit: "cover" }}
          alt="Dominican master blue home"
        />
        <div className="grid items-center h-full absolute text-white ">
          <div className="mx-10">
            <p className="font-extrabold text-4xl md:text-6xl">
              {t("bannerMessage1")}
            </p>
            <p className="font-extrabold text-4xl md:text-6xl mb-10">
              {t("bannerMessage2")}
            </p>
            <Link
              className="border-[1px] border-white p-2 font-bold text-xl bg-white/40 hover:bg-white hover:text-gold transition-all duration-300 ease-in-out"
              href="/"
            >
              {t("seeProducts")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
