import { ProductsTable } from "@/app/components/dashboard/product/products";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";

async function GetTranslationsProduct(
  lng: string
): Promise<ProductTranslations> {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
}

export default async function Products({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const translations = await GetTranslationsProduct(lng);

  return <ProductsTable translations={translations} lng={lng} />;
}
