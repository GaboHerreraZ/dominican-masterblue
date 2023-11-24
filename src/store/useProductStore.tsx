import { ProductTranslations } from "@/app/models/productTranslations";
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
  translations: ProductTranslations;
  setProduct: (products: Product) => Promise<string>;
  getProducts: () => void;
  getProductById: (productId: string) => Promise<Product | null>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
}

export const useProductStore = create<ProductState>()((set) => {
  const productDb = new Db<Omit<Product, "id">>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const createProductsUseCase = new CreateProductUseCase(productImplementation);
  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  const updateProductUseCase = new UpdateProductUseCase(productImplementation);
  const deleteProductUseCase = new DeleteProductUseCase(productImplementation);

  return {
    translations: {},
    products: [],
    getProducts: async () => {
      const products = await getProductsUseCase.execute();
      set(() => ({ products }));
    },
    setProduct: async (product: Product) => {
      const response = await createProductsUseCase.execute(product);
      const newProduct = { ...product, id: response };
      set((state) => ({ products: [...state.products, newProduct] }));
      return response;
    },
    getProductById: async (productId: string) =>
      await getProductByIdUseCase.execute(productId),
    updateProduct: async (product: Product) => {
      await updateProductUseCase.execute(product),
        set((state) => ({
          products: state.products.map((item) =>
            item.id === product.id ? product : item
          ),
        }));
    },
    deleteProduct: async (productId: string) => {
      await deleteProductUseCase.execute(productId),
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId
          ),
        }));
    },
  };
});
