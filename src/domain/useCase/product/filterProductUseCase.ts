import { UseCase } from "@/base/useCase";
import { Filter, SimpleFilter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class FilterProductUseCase implements UseCase<SimpleFilter, Product[]> {
  constructor(private repository: ProductRepository) {
    this.repository = repository;
  }

  execute(simpleFilter: SimpleFilter) {
    return this.repository.filterProduct(simpleFilter);
  }
}
