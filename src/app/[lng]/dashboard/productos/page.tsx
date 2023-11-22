import { ProductsTable } from "@/app/components/dashboard/product/products";
import { useTranslation } from "@/app/i18n";
import { ProductTranslations } from "@/app/models/productTranslations";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const getProducts = async () => {
  const { getProducts } = ProductService();
  const response = await getProducts();
  return response;
};

const GetTranslations = async (lng: string): Promise<ProductTranslations> => {
  const { t } = await useTranslation(lng, "products");
  const translations: ProductTranslations = {
    title: t("titleListProducts"),
    newProduct: t("newProduct"),
    active: t("active"),
    inactive: t("inactive"),
  };

  return translations;
};

export default async function Products({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const products = await getProducts();
  console.log("products", products);
  const translations = await GetTranslations(lng);
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
