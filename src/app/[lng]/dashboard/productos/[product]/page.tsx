import { ProductDetailDashboard } from "@/app/components/dashboard/product/productDetail";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import ProductService from "@/service/productService";

const getProduct = async (id: string = "") => {
  const { findById } = ProductService();
  return await findById(id);
};

export async function generateStaticParams() {
  const { findAll } = ProductService();
  const products = await findAll();
  const params = products.map((product: Product) => ({
    params: { product: product.id },
  }));

  return params;
}

const GetProductById = async (id: string): Promise<Product> => {
  if (id === "nuevo") return { id: "nuevo" } as Product;

  return await getProduct(id);
};

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
  const productDetailPromise = GetProductById(product);
  const translationsPromise = GetTranslationsProduct(lng);
  const [productDetail, translations] = await Promise.all([
    productDetailPromise,
    translationsPromise,
  ]);

  return (
    <>
      <ProductDetailDashboard
        translations={translations}
        product={productDetail}
      />
    </>
  );
}
