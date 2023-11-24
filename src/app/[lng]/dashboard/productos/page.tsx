import { ProductsTable } from "@/app/components/dashboard/product/products";
import { useTranslation } from "@/app/i18n";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const getProducts = async () => {
  const { getProducts } = ProductService();
  const response = await getProducts();
  return response;
};

const GetTranslationsProduct = async (
  lng: string
): Promise<ProductTranslations> => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

export default async function Products({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const products = await getProducts();
  const translations = await GetTranslationsProduct(lng);
  useProductStore.setState({ products });

  return (
    <>
      <ProductStoreInitializer
        products={products}
        translations={translations}
      />
      <ProductsTable products={products} lng={lng} />
    </>
  );
}
