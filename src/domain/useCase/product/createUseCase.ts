import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class CreateProductUseCase implements UseCase<Product, Product> {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(product: Product): Promise<Product> {
    return this.productRepository.create(product);
  }
}
