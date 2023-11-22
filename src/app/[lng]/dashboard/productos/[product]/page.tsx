import ProductService from "@/service/productService";
import { useProductStore } from "@/store/useProductStore";

export async function generateStaticParams() {
  const { products } = useProductStore.getState();
  const { getProducts } = ProductService();

  const response = await getProducts();

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

export default async function ProductDetail({
  params: { lng, product },
}: {
  params: { lng: string; product: string };
}) {
  const productDetail = await getProductById(product);
  console.log("productDetail", productDetail);

  return <h1>{productDetail?.englishName}</h1>;
}
