import { ProductsTable } from "@/app/components/dashboard/product/products";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const GetProducts = async () => {
  const { findAll } = ProductService();
  return await findAll();
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
  const products = await GetProducts();
  const translations = await GetTranslationsProduct(lng);

  useProductStore.setState({ products });

  return (
    <>
      <ProductStoreInitializer products={products} />
      <ProductsTable
        translations={translations}
        products={products}
        lng={lng}
      />
    </>
  );
}
