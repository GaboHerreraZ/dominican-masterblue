import { getTranslation } from "@/i18n";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

export const HomeMessage = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className=" my-20 px-5 md:px-0">
      <div className="flex justify-center intersect:animate-fade-down">
        <RiDoubleQuotesL size={30} />
        <h1 className="text-2xl text-center scale-50 intersect:scale-100  md:text-4xl font-bold italic">
          {t("homeMessage")}
        </h1>
        <RiDoubleQuotesR size={30} />
      </div>
      <div className="flex mt-5 justify-center  ">
        <div className="h-1 w-[100px] bg-gold "></div>
      </div>
    </section>
  );
};
