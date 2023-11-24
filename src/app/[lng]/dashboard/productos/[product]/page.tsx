import ProductService from "@/service/productService";
import { ProductDetailDashboard } from "@/app/components/dashboard/product/productDetail";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import { cache } from "react";

export const revalidate = 20;

export async function generateStaticParams() {
  const { getProducts } = ProductService();

  const response = await getProducts();

  const params = response.map((product) => ({
    params: { product: product.id },
  }));

  return params;
}

const GetProductById = cache(async (id: string): Promise<Product> => {
  const { getProductById } = ProductService();
  console.log("GetProductById");
  return id === "nuevo"
    ? ({ id: "nuevo" } as Product)
    : await getProductById(id);
});

const GetTranslationsProduct = async (
  lng: string
): Promise<ProductTranslations> => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

export default async function ProductDetail({
  params: { lng, product },
}: {
  params: { lng: string; product: string };
}) {
  const productDetail = await GetProductById(product);
  const translations = await GetTranslationsProduct(lng);

  return (
    <ProductDetailDashboard
      product={productDetail}
      translations={translations}
    />
  );
}
