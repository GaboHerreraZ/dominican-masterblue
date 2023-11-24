import { ProductsTable } from "@/app/components/dashboard/product/products";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";
import { cache } from "react";

export const revalidate = 20;

const getProducts = cache(async () => {
  const { getProducts } = ProductService();

  const response = await getProducts();
  console.log("getProducts", response);
  return response;
});

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
  const productsPromise = getProducts();
  const translationsPromise = GetTranslationsProduct(lng);

  const [products, translations] = await Promise.all([
    productsPromise,
    translationsPromise,
  ]);

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
