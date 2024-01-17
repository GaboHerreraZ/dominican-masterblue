import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { SimpleFilter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { FilterProductUseCase } from "@/domain/useCase/product/filterProductUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";
import { Db } from "@/lib/db";

export default function ProductService() {
  const productDb = new Db<Omit<Product, "id">>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  const getProductsByFilter = new FilterProductUseCase(productImplementation);

  async function findAll() {
    return await getProductsUseCase.execute();
  }

  async function findById(id: string) {
    return await getProductByIdUseCase.execute(id);
  }

  async function findByFilter(simpleFilter: SimpleFilter) {
    return getProductsByFilter.execute(simpleFilter);
  }

  return {
    findAll,
    findById,
    findByFilter,
  };
}
