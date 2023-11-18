import { ProductContainer } from "@/app/components/product/productContainer";
import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import { useProductStore } from "@/store/useProductStore";

const product: Product = {
  id: "1",
  name: "Product 1",
  description: "Description 1",
  price: 100,
  image: "image",
};

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
  useProductStore.setState({ products });
  return (
    <div>
      <ProductStoreInitializer products={products} />
      <ProductContainer lng={lng} />
    </div>
  );
}
