import { ProductContainer } from "@/app/components/product/productContainer";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const GetProducts = async () => {
  const { findAll } = ProductService();
  const response = await findAll();
  return response;
};

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
  const productsPromise = await GetProducts();
  const translationsPromise = await GetTranslationsProduct(lng);

  const [products, translations] = await Promise.all([
    productsPromise,
    translationsPromise,
  ]);

  useProductStore.setState({ products });
  return (
    <div>
      <ProductStoreInitializer products={products} />
      <ProductContainer lng={lng} />
    </div>
  );
}
