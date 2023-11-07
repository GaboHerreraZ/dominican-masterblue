import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class CreateProductUseCase implements UseCase<Product, boolean> {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(product: Product): Promise<boolean> {
    return this.productRepository.create(product);
  }
}
