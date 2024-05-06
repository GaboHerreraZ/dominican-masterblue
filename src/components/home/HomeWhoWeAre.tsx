import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/png/logo.png";
import { getTranslation } from "@/i18n";

export const HomeWhoWeAre = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="flex mx-auto max-w-[1000px] my-10 px-5  ">
      <div className="w-2/3">
        <div className="flex w-full">
          <h1 className="text-8xl intersect:animate-fade-down intersect:animate-duration-700 lg:text-9xl text-center w-[50%] font-bold text-gold underline underline-offset-4 decoration-4">
            {t("whoWeAre")}
          </h1>
          <div className="w-[50%] flex   justify-end items-center">
            <div className="hidden md:block relative bg-white border border-gold p-2 md:p-10  ">
              <div className="w-full h-full z-20  intersect:animate-fade-down intersect:animate-duration-700">
                <Link href="/" className="">
                  <Image
                    src={logo}
                    alt="Logo Dominican Masterblue"
                    width={250}
                    height={90}
                  />
                </Link>
              </div>
              <div className="bg-gold border intersect:animate-fade intersect:animate-duration-1000 border-gold h-full w-full absolute -top-3 -right-3 -z-10"></div>
            </div>
          </div>
        </div>
        <p className="mt-5 px-2 md:px-10 text-lg intersect:animate-fade-down intersect:animate-duration-1000">
          <span className="font-bold text-xl">{t("whoWeAreDescription1")}</span>{" "}
          {t("whoWeAreDescription2")}
        </p>
      </div>
      <div className="w-1/3 relative intersect:animate-fade animate-duration-700 -z-20">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/lamps.webp?t=2024-05-03T19%3A05%3A00.758Z"
          alt="Logo Dominican Masterblue"
          fill
          style={{ objectFit: "cover" }}
          sizes="100%"
        />
      </div>
    </section>
  );
};
