import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class FindProductByIdUseCase implements UseCase<string, Product> {
  constructor(private repository: ProductRepository) {
    this.repository = repository;
  }

  execute(id: string): Promise<Product> {
    return this.repository.findById(id);
  }
}
