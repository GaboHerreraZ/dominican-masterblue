import { ProductContainer } from "@/app/components/product/productContainer";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const getProducts = async () => {
  const { getProducts } = ProductService();
  const response = await getProducts();
  return response;
};

export default async function ProductsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const products = await getProducts();
  console.log("products", products);
  useProductStore.setState({ products });
  return (
    <div>
      <ProductStoreInitializer products={products} translations={{}} />
      <ProductContainer lng={lng} />
    </div>
  );
}
