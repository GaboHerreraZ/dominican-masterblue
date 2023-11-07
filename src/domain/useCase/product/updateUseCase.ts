import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class UpdateProductUseCase implements UseCase<Product, boolean> {
  constructor(private repository: ProductRepository) {
    this.repository = repository;
  }

  execute(product: Product): Promise<boolean> {
    return this.repository.update(product, product.id);
  }
}
