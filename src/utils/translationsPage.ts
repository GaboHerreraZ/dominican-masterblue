import { getTranslation } from "@/i18n";
import { ProductTranslations } from "@/models/productTranslations";
import { DashboardTranslations } from "../models/dashboardTranslations";
import { LoginTranslations } from "../models/loginTranslations";
import { UsTranslations } from "../models/usTranslationss";
import { FooterTranslations } from "../models/footerTranslations";
import { ContactTranslations } from "@/models/contactTranslations";

export default function GetTranslations() {
  const getProductTranslations = async (
    lng: string
  ): Promise<ProductTranslations> => {
    const { t } = await getTranslation(lng, "products");

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
      noCategory: t("noCategory"),
      clearFilter: t("clearFilter"),
      products: t("products"),
    };

    return productTranslations;
  };

  const getDashboardTranslations = async (lng: string) => {
    const { t } = await getTranslation(lng, "dashboard");

    const dashboardTranslations: DashboardTranslations = {
      productTitle: t("productTitle"),
      productDescription: t("productDescription"),
      listProductTitle: t("listProductTitle"),
      logOut: t("logOut"),
      moduleProductsTitle: t("moduleProductsTitle"),
      moduleProductsDescription: t("moduleProductsDescription"),
      dashboardDescription: t("dashboardDescription"),
    };
    return dashboardTranslations;
  };

  const getLoginTranslations = async (lng: string) => {
    const { t } = await getTranslation(lng, "login");

    const loginTranslations: LoginTranslations = {
      email: t("email"),
      emailPlaceHolder: t("emailPlaceHolder"),
      password: t("password"),
      passwordPlaceHolder: t("passwordPlaceHolder"),
      login: t("login"),
    };

    return loginTranslations;
  };

  const getUsTranslations = async (lng: string) => {
    const { t } = await getTranslation(lng, "us");

    const translations: UsTranslations = {
      achitecture: t("achitecture"),
      design: t("design"),
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
      ourValues: t("ourValues"),
      servicesDescription: t("servicesDescription"),
      interiorDesignTip1Title: t("interiorDesignTip1Title"),
      interiorDesignTip1Description: t("interiorDesignTip1Description"),
      interiorDesignTip2Title: t("interiorDesignTip2Title"),
      interiorDesignTip2Description: t("interiorDesignTip2Description"),
      interiorDesignTip3Title: t("interiorDesignTip3Title"),
      interiorDesignTip3Description: t("interiorDesignTip3Description"),
      interiorDesignTip4Title: t("interiorDesignTip4Title"),
      interiorDesignTip4Description: t("interiorDesignTip4Description"),
      interiorDesignTip5Title: t("interiorDesignTip5Title"),
      interiorDesignTip5Description: t("interiorDesignTip5Description"),
      interiorDesignTip6Title: t("interiorDesignTip6Title"),
      interiorDesignTip6Description: t("interiorDesignTip6Description"),
    };

    return translations;
  };

  const getFooterTranslations = async (lng: string) => {
    const { t } = await getTranslation(lng, "footer");

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

  const getContactTranslations = async (lng: string) => {
    const { t } = await getTranslation(lng, "contact");

    const translations: ContactTranslations = {
      contactDescription: t("contactDescription"),
      contactInvitation: t("contactInvitation"),
      errorName: t("errorName"),
      name: t("name"),
      email: t("email"),
      errorEmail: t("errorEmail"),
      phone: t("phone"),
      errorPhone: t("errorPhone"),
      message: t("message"),
      errorMessage: t("errorMessage"),
      contactUsButton: t("contactUsButton"),
      thanksForContacting: t("thanksForContacting"),
      contactSoon: t("contactSoon"),
      title: t("title"),
      subTitle: t("subTitle"),
      description: t("description"),
      service: t("service"),
      whileContacting: t("whileContacting"),
      seeServices: t("seeServices"),
      seeProducts: t("seeProducts"),
    };
    return translations;
  };

  return {
    getProductTranslations,
    getDashboardTranslations,
    getLoginTranslations,
    getUsTranslations,
    getFooterTranslations,
    getContactTranslations,
  };
}
