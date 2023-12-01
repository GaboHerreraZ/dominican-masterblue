import { ProductDetailDashboard } from "@/app/components/dashboard/product/productDetail";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";

export async function generateStaticParams() {
  const { findAll } = ProductService();
  const products = await findAll();
  const params = products.map((product: Product) => ({
    params: { product: product.id },
  }));

  return params;
}

async function GetTranslationsProduct(
  lng: string
): Promise<ProductTranslations> {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
}

export default async function ProductDetail({
  params: { lng, product },
}: {
  params: { lng: string; product: string };
}) {
  const translations = await GetTranslationsProduct(lng);
  return <ProductDetailDashboard id={product} translations={translations} />;
}
