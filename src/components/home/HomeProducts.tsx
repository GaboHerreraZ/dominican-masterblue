import { getTranslation } from "@/i18n";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CATEGORIES } from "./const";
import { HomeProductCard } from "./HomeProductCard";

export const HomeProducts = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 mt-20 ">
      <article className="flex flex-col my-10  md:px-64 items-center justify-center ">
        <h1 className="italic text-center m-0 text-5xl ">
          {t("productDescription")}
        </h1>
        <h4 className="mb-7 m-0 text-master-900/70 text-center font-bold text-2xl">
          {t("product")}
        </h4>
        <span className="self-start text-master-900/70">
          <FaQuoteLeft size={50} />
        </span>
        <div className="mt-10 md:m-0">
          <p className="flex italic text-xl md:text-3xl lg:text-3xl text-center">
            {t("contactDescription")}
          </p>
          <p className="text-end text-xl font-bold text-master-900/70">
            - Kelly Wearstler
          </p>
        </div>
        <span className="self-end text-master-900/70">
          <FaQuoteRight size={50} />
        </span>
      </article>
      <section className="grid grid-cols-1 bg-master-secondary gap-0 md:px-64 md:py-20   md:gap-10 md:grid-cols-2">
        {CATEGORIES.map((category, idx) => (
          <HomeProductCard key={idx} lng={lng} product={category} />
        ))}
      </section>
    </section>
  );
};
