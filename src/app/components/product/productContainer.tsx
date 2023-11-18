import { FiltersProduct } from "@/app/components/product/filters";
import { Products } from "@/app/components/product/products";
import { OrderByFilter } from "@/app/components/product/orderByFilter";
import { useTranslation } from "@/app/i18n";
import { ProductTranslations } from "@/app/models/productTranslations";

const GetTranslations = async ({
  lng,
}: {
  lng: string;
}): Promise<ProductTranslations> => {
  const { t } = await useTranslation(lng, "products");

  return {
    filterBy: t("filterBy"),
    noNofilterSelected: t("noNofilterSelected"),
    orderBy: t("orderBy"),
    category: t("category"),
    categoryDescription: t("categoryDescription"),
    price: t("price"),
    colors: t("colors"),
    colorDescription: t("colorDescription"),
    recently: t("recently"),
    lowPrice: t("lowPrice"),
    highPrice: t("highPrice"),
  } as ProductTranslations;
};

export const ProductContainer = async ({ lng }: { lng: string }) => {
  const translations = await GetTranslations({ lng });

  return (
    <section className="flex flex-col md:flex-row gap-5 mx-10  md:mx-20 my-10">
      <section className="flex flex-col w-full">
        <div className="flex items-center justify-between mb-5">
          <FiltersProduct translations={translations} />
          <span className="text-small italic font-bold">
            {translations.noNofilterSelected}
          </span>
          <OrderByFilter translations={translations} />
        </div>
        <Products lng={lng} />
      </section>
    </section>
  );
};
