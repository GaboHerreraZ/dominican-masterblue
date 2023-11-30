import { ProductTranslations } from "@/app/models/productTranslations";
import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Product } from "@/domain/model/product";
import { CreateProductUseCase } from "@/domain/useCase/product/createUseCase";
import { DeleteImageProductUseCase } from "@/domain/useCase/product/deleteImageUseCase";
import { DeleteProductUseCase } from "@/domain/useCase/product/deleteUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";
import { MarkImageProductUseCase } from "@/domain/useCase/product/markImageUseCase";
import { UpdateProductUseCase } from "@/domain/useCase/product/updateUseCase";
import { create } from "zustand";

interface ProductState {
  products: Product[];
  translations: ProductTranslations;
  findAll: () => Promise<Product[]>;
  create: (products: Product) => Promise<string>;
  update: (product: Product) => Promise<boolean>;
  delete: (productId: string) => Promise<boolean>;
  findById: (productId: string) => Promise<Product>;
  deleteImage: (productId: string, image: string) => Promise<boolean>;
  markImage: (productId: string, image: string) => Promise<boolean>;
}

export const useProductStore = create<ProductState>()(() => {
  const productImplementationRepository = new ProductImplementationRepository();
  const createProductUseCase = new CreateProductUseCase(
    productImplementationRepository
  );
  const findAllProductUseCase = new FindAllProductUseCase(
    productImplementationRepository
  );
  const findByIdProductUseCase = new FindProductByIdUseCase(
    productImplementationRepository
  );
  const deleteProductUseCase = new DeleteProductUseCase(
    productImplementationRepository
  );
  const updateProductUseCase = new UpdateProductUseCase(
    productImplementationRepository
  );

  const deleteImageProductUseCase = new DeleteImageProductUseCase(
    productImplementationRepository
  );
  const markImageProductUseCase = new MarkImageProductUseCase(
    productImplementationRepository
  );

  return {
    products: [],
    translations: {} as ProductTranslations,
    findAll: async () => await findAllProductUseCase.execute(),
    create: async (product: Product) => {
      const response = await createProductUseCase.execute(product);
      return response.id;
    },
    update: async (product: Product) =>
      await updateProductUseCase.execute(product),
    delete: async (productId: string) =>
      await deleteProductUseCase.execute(productId),
    findById: async (productId: string) => {
      if (productId === "nuevo") return { id: "nuevo" } as Product;
      return await findByIdProductUseCase.execute(productId);
    },
    deleteImage: async (productId: string, image: string) =>
      await deleteImageProductUseCase.execute({ id: productId, image }),
    markImage: async (productId: string, image: string) =>
      await markImageProductUseCase.execute({ id: productId, image }),
  };
});
