import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class CreateProductUseCase implements UseCase<Product, string> {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(product: Product): Promise<string> {
    return this.productRepository.create(product);
  }
}
