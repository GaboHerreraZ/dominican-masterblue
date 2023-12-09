import { UseCase } from "@/base/useCase";
import { Filter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class FilterProductUseCase implements UseCase<Filter, Product[]> {
  constructor(private repository: ProductRepository) {
    this.repository = repository;
  }

  execute(filter: Filter): Promise<Product[]> {
    return this.repository.filterProduct(filter);
  }
}
