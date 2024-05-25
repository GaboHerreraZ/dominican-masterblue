import { getTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const HomeProjects = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="my-20  py-5">
      <div className="container mx-auto w-full text-center">
        <div className="flex mt-5 justify-center intersect:animate-fade-down">
          <RiDoubleQuotesL size={30} />
          <h1 className="text-2xl text-center scale-50 intersect:scale-100  md:text-4xl font-bold italic">
            {t("seeProjectsMessage")}
          </h1>
          <RiDoubleQuotesR size={30} />
        </div>
        <div className="flex  mt-2 mb-10 justify-center  ">
          <div className="h-1 w-[100px] bg-gold "></div>
        </div>
        <div className="flex flex-wrap justify-center w-full">
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-300"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/14.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-500"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/19.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-700"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/2.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-1000"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/28.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-[1200]"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/24.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="intersect:animate-fade-down intersect:animate-duration-[1400]"
            src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/37.webp"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="my-5">
          <Link
            href="/projects"
            className="bg-gold/75 px-3 py-1  hover:bg-white/75 hover:text-gold transition-all duration-700 text-white text-lg"
          >
            {t("seeProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
};
