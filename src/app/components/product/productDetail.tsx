"use client";
import { Product } from "@/domain/model/product";
import { useProductStore } from "@/store/useProductStore";
import { Button } from "@nextui-org/react";

export const ProductDetail = ({ product }: { product: Product }) => {
  const { products, setProduct, deleteProduct, updateProduct, getProductById } =
    useProductStore();

  const handleNewProductButton = async () => {
    const newProduct: Product = {
      id: "101",
      name: "gonorreeaaaa",
      price: 10,
      description: "description 10",
      image: "image 10",
    };

    await setProduct(newProduct);
  };

  const handleEditProduct = async () => {
    const newProduct: Product = {
      id: "IgCri8y6bpxvo3ZYRU5z",
      name: "name updated",
      price: 10000,
      description: "description updated",
      image: "image updated",
    };

    await updateProduct(newProduct);
  };

  const handleDeleteButton = async () => {
    await deleteProduct("q7tlbtAlTOFMOw52BHMw");
  };

  const handleGetProductByIdButton = async () => {
    await getProductById("ipSwy7ODFv7umB7Yl0nt");
  };

  return (
    <div>
      {product && (
        <div>
          <h1>Product</h1>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.image}</p>
          <Button onClick={handleNewProductButton}>New</Button>
          <Button onClick={handleEditProduct}>Update</Button>
          <Button onClick={handleDeleteButton}>Delete</Button>
          <Button onClick={handleGetProductByIdButton}>GetById</Button>
        </div>
      )}
    </div>
  );
};
