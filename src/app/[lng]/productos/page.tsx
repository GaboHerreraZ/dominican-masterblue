import { ProductContainer } from "@/app/components/product/productContainer";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import { Translations, useTranslationStore } from "@/store/translationStore";
import { TranslationStoreInitializer } from "@/store/translationStoreInitializer";

const GetTranslationsProduct = async (
  lng: string
): Promise<ProductTranslations> => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

export default async function ProductsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const productTranslations = await GetTranslationsProduct(lng);

  const translations: Translations = {
    lng,
    productTranslations: productTranslations,
  };

  useTranslationStore.setState(translations);

  return (
    <div>
      <TranslationStoreInitializer translations={translations} />
      <ProductContainer />
    </div>
  );
}
