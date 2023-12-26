import { useTranslation } from "@/i18n";
import { ProductTranslations } from "@/models/productTranslations";
import { DashboardTranslations } from "../models/dashboardTranslations";
import { LoginTranslations } from "../models/loginTranslations";
import { UsTranslations } from "../models/UsTranslations";
import { FooterTranslations } from "../models/footerTranslations";

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
      fillOutGeneralInformation: t("fillOutGeneralInformation"),
      errorUploadingImages: t("errorUploadingImages"),
      imageSizeTooLarge: t("imageSizeTooLarge"),
      imagesUploaded: t("imagesUploaded"),
      markAsMain: t("markAsMain"),
      isDragActive: t("isDragActive"),
      dragDescription: t("dragDescription"),
      maxImages: t("maxImages"),
      deleteImageOk: t("deleteImageOk"),
      markAsMainOk: t("markAsMainOk"),
      seeVideo: t("seeVideo"),
      editProductTooltip: t("editProductTooltip"),
      availableColours: t("availableColours"),
      subcategory: t("subcategory"),
      subcategoryDescription: t("subcategoryDescription"),
      filters: t("filters"),
      room: t("room"),
      kitchen: t("kitchen"),
      bathroom: t("bathroom"),
      livingroom: t("livingroom"),
      bedroom: t("bedroom"),
      office: t("office"),
      other: t("other"),
      desk: t("desk"),
      chair: t("chair"),
      bed: t("bed"),
      sofa: t("sofa"),
      table: t("table"),
      wardrobe: t("wardrobe"),
      priceValidation: t("priceValidation"),
      materialValidation: t("materialValidation"),
      slug: t("slug"),
      slugValidation: t("slugValidation"),
      spanishNameValidation: t("spanishNameValidation"),
      englishNameValidation: t("englishNameValidation"),
      spanishDescriptionValidation: t("spanishDescriptionValidation"),
      englishDescriptionValidation: t("englishDescriptionValidation"),
      quantityValidation: t("quantityValidation"),
      requestInformation: t("requestInformation"),
      attribute: t("attribute"),
      characteristics: t("characteristics"),
      detail: t("detail"),
      back: t("back"),
      ourRecommended: t("ourRecommended"),
    };

    return productTranslations;
  };

  const GetDashboardTranslations = async (lng: string) => {
    const { t } = await useTranslation(lng, "dashboard");

    const dashboardTranslations: DashboardTranslations = {
      productTitle: t("productTitle"),
      productDescription: t("productDescription"),
      listProductTitle: t("listProductTitle"),
      logOut: t("logOut"),
      moduleProductsTitle: t("moduleProductsTitle"),
      moduleProductsDescription: t("moduleProductsDescription"),
    };
    return dashboardTranslations;
  };

  const GetLoginTranslations = async (lng: string) => {
    const { t } = await useTranslation(lng, "login");

    const loginTranslations: LoginTranslations = {
      email: t("email"),
      emailPlaceHolder: t("emailPlaceHolder"),
      password: t("password"),
      passwordPlaceHolder: t("passwordPlaceHolder"),
      login: t("login"),
    };

    return loginTranslations;
  };

  const GetUsTranslations = async (lng: string) => {
    const { t } = await useTranslation(lng, "us");

    const translations: UsTranslations = {
      achitecture: t("achitecture"),
      contactDescription: t("contactDescription"),
      contactInvitation: t("contactInvitation"),
      contactUs: t("contactUs"),
      design: t("design"),
      email: t("email"),
      message: t("message"),
      name: t("name"),
      phone: t("phone"),
      remodeling: t("remodeling"),
      seeMore: t("seeMore"),
      serviceTitle: t("serviceTitle"),
      value1: t("value1"),
      value1Description: t("value1Description"),
      value2: t("value2"),
      value2Description: t("value2Description"),
      value3: t("value3"),
      value3Description: t("value3Description"),
      value4: t("value4"),
      value4Description: t("value4Description"),
      whoWeAre: t("whoWeAre"),
      whoWeAreDescription1: t("whoWeAreDescription1"),
      whoWeAreDescription2: t("whoWeAreDescription2"),
      thanksForContacting: t("thanksForContacting"),
      contactSoon: t("contactSoon"),
    };

    return translations;
  };

  const GetFooterTranslations = async (lng: string) => {
    const { t } = await useTranslation(lng, "footer");

    const translations: FooterTranslations = {
      contact: t("contact"),
      description: t("description"),
      address: t("address"),
      addressDescription: t("addressDescription"),
      schedule: t("schedule"),
      weekSchedule: t("weekSchedule"),
      weekendSchedule: t("weekendSchedule"),
      us: t("us"),
      whoWeAre: t("whoWeAre"),
      ourProducts: t("ourProducts"),
      ourServices: t("ourServices"),
      meetUs: t("meetUs"),
      doYouNeedHelp: t("doYouNeedHelp"),
    };
    return translations;
  };

  return {
    GetProductTranslations,
    GetDashboardTranslations,
    GetLoginTranslations,
    GetUsTranslations,
    GetFooterTranslations,
  };
}
