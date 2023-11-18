import { Db } from "@/data/dataSource/db";
import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Product } from "@/domain/model/product";
import { CreateProductUseCase } from "@/domain/useCase/product/createUseCase";
import { DeleteProductUseCase } from "@/domain/useCase/product/deleteUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";
import { UpdateProductUseCase } from "@/domain/useCase/product/updateUseCase";
import { create } from "zustand";

interface ProductState {
  products: Product[];
  setProduct: (products: Product) => Promise<boolean>;
  getProducts: () => void;
  getProductById: (productId: string) => Promise<Product | null>;
  updateProduct: (product: Product) => Promise<boolean>;
  deleteProduct: (productId: string) => Promise<boolean>;
}

export const useProductStore = create<ProductState>()((set) => {
  const productDb = new Db<Product>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const createProductsUseCase = new CreateProductUseCase(productImplementation);
  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  const updateProductUseCase = new UpdateProductUseCase(productImplementation);
  const deleteProductUseCase = new DeleteProductUseCase(productImplementation);

  return {
    products: [],
    getProducts: async () => {
      const products = await getProductsUseCase.execute();
      set({ products });
    },
    setProduct: async (product: Product) =>
      await createProductsUseCase.execute(product),
    getProductById: async (productId: string) =>
      await getProductByIdUseCase.execute(productId),
    updateProduct: async (product: Product) =>
      await updateProductUseCase.execute(product),
    deleteProduct: async (productId: string) =>
      await deleteProductUseCase.execute(productId),
  };
});
