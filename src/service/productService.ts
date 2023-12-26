import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Filter } from "@/domain/model/filter";
import { FilterProductUseCase } from "@/domain/useCase/product/filterProductUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";

export default function ProductService() {
  const productImplementation = new ProductImplementationRepository();

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

  async function findByFilter(filter: Filter) {
    return getProductsByFilter.execute(filter);
  }

  return {
    findAll,
    findById,
    findByFilter,
  };
}
