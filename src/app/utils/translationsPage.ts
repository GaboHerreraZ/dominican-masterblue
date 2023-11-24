import { useTranslation } from "@/app/i18n";
import { ProductTranslations } from "@/app/models/productTranslations";

export default function GetTranslations() {
  const GetProductTranslations = async (
    lng: string
  ): Promise<ProductTranslations> => {
    const { t } = await useTranslation(lng, "products");

    const productTranslations: ProductTranslations = {
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
      active: t("active"),
      inactive: t("inactive"),
      newProduct: t("newProduct"),
      seeMore: t("seeMore"),
      title: t("titleListProducts"),
    };

    return productTranslations;
  };

  return {
    GetProductTranslations,
  };
}
