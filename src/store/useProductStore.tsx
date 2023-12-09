import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Filter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { FilterProductUseCase } from "@/domain/useCase/product/filterProductUseCase";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductState {
  products: Product[];
  filter: Filter;
  filterProducts: (filter: Filter) => Promise<void>;
}

export const useProductStore = create(
  persist<ProductState>(
    (set) => {
      const productImplementationRepository =
        new ProductImplementationRepository();
      const filterProductUseCase = new FilterProductUseCase(
        productImplementationRepository
      );

      return {
        products: [],
        filter: {
          categories: [],
          subcategories: [],
          price: [0, 10000],
          orderBy: "asc",
        },
        filterProducts: async (filter: Filter) => {
          const products = await filterProductUseCase.execute(filter);
          set(() => ({ products, filter }));
        },
      };
    },
    {
      name: "product-storage",
    }
  )
);
