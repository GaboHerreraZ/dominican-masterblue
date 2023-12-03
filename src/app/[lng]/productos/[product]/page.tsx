import { ProductDetail } from "@/app/components/product/productDetail";
import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";
import { useProductStore } from "@/store/useProductStore";

export async function generateStaticParams() {
  const { findAll } = ProductService();
  const response = await findAll();
  const params = response.map((product) => ({
    params: { product: product.id },
  }));

  return params;
}

const getProductById = async (id: string) => {
  const { products } = useProductStore.getState();
  const product = products.find((product) => product.id === id);
  return product;
};

export default async function ProductPage({
  params,
}: {
  params: { lng: string; product: string };
}) {
  const { product } = params;
  const productById = (await getProductById(product)) as Product;
  return <ProductDetail product={productById} />;
}
