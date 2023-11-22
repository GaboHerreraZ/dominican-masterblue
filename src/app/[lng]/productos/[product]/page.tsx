import { ProductDetail } from "@/app/components/product/productDetail";
import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";
import { useProductStore } from "@/store/useProductStore";

export async function generateStaticParams() {
  const { getProducts } = ProductService();
  const response = await getProducts();
  const params = response.map((product) => ({
    params: { product: product.id },
  }));

  return params;
}

const getProductById = async (id: string) => {
  const { products } = useProductStore.getState();
  console.log("product", products);
  const product = products.find((product) => product.id === id);
  console.log("product", product);
  return product;
};

export default async function ProductPage({
  params,
}: {
  params: { lng: string; product: string };
}) {
  const { lng, product } = params;
  console.log("product id", product);
  const productById = (await getProductById(product)) as Product;
  return <ProductDetail product={productById} />;
}
