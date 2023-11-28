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
      productDetail: t("productDetail"),
      productDescription: t("productDescription"),
      productInformation: t("productInformation"),
      productPhotos: t("productPhotos"),
      saveProduct: t("saveProduct"),
      deleteProduct: t("deleteProduct"),
      generalInformation: t("generalInformation"),
      generalInformationDescription: t("generalInformationDescription"),
      spanishName: t("spanishName"),
      englishName: t("englishName"),
      spanishDescription: t("spanishDescription"),
      englishDescription: t("englishDescription"),
      specifications: t("specifications"),
      specificationsDescription: t("specificationsDescription"),
      width: t("width"),
      height: t("height"),
      weight: t("weight"),
      length: t("length"),
      quantity: t("quantity"),
      youtubeLink: t("youtubeLink"),
      additionalInformation: t("additionalInformation"),
      additionalInformationDescription: t("additionalInformationDescription"),
      material: t("material"),
      spanishNamePlaceHolder: t("spanishNamePlaceHolder"),
      englishNamePlaceHolder: t("englishNamePlaceHolder"),
      spanishDescriptionPlaceHolder: t("spanishDescriptionPlaceHolder"),
      englishDescriptionPlaceHolder: t("englishDescriptionPlaceHolder"),
      materialPlaceHolder: t("materialPlaceHolder"),
      youtubeLinkPlaceHolder: t("youtubeLinkPlaceHolder"),
      saveOk: t("saveOk"),
      updatedOk: t("updatedOk"),
      deleteOk: t("deleteOk"),
      deleteMessage: t("deleteMessage"),
      titleDeleteModal: t("titleDeleteModal"),
    };

    return productTranslations;
  };

  return {
    GetProductTranslations,
  };
}
