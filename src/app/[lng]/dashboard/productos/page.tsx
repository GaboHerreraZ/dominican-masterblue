import { ProductsTable } from "@/app/components/dashboard/product/products";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

async function GetProducts() {
  const { findAll } = ProductService();
  return await findAll();
}

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
  const productsPromise = GetProducts();
  const translationsPromise = GetTranslationsProduct(lng);

  const [products, translations] = await Promise.all([
    productsPromise,
    translationsPromise,
  ]);

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
