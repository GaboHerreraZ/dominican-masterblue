import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";

const setProduct = async () => {
  const { createProduct } = ProductService();
  const product: Product = {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    price: 100,
    image: "image",
  };
  return await createProduct(product);
};

const getProducts = async () => {
  const { getProducts } = ProductService();
  return getProducts();
};

const getById = async () => {
  const { getProductById } = ProductService();
  return getProductById();
};

const update = async () => {
  const { update } = ProductService();
  return update();
};

const deletete = async () => {
  const { deleteProduct } = ProductService();
  return deleteProduct();
};

export default async function ProductsPage() {
  const response = await deletete();
  return (
    <div>
      <h1>Products</h1>
      {/* Add your product list here */}
    </div>
  );
}
