import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class FindAllProductUseCase implements UseCase<void, Product[]> {
  constructor(private repository: ProductRepository) {
    this.repository = repository;
  }

  execute(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
