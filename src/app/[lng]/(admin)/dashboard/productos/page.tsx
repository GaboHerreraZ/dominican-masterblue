import { ProductsGrid } from "@/components/dashboard";
import ProductService from "@/service/productService";
import GetTranslations from "@/utils/translationsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "List of products",
};

const getProducts = async () => {
  const { findAll } = ProductService();
  return await findAll();
};

const getTranslations = async (lng: string) => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

export default async function Products({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const productsPromise = getProducts();
  const translationPromise = getTranslations(lng);

  const [products, translations] = await Promise.all([
    productsPromise,
    translationPromise,
  ]);

  return (
    <ProductsGrid products={products} translations={translations} lng={lng} />
  );
}
