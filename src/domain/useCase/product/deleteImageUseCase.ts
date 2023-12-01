import { UseCase } from "@/base/useCase";
import { ProductRepository } from "@/domain/repository/productRepository";

export class DeleteImageProductUseCase implements UseCase<string, boolean> {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(image: string): Promise<boolean> {
    return this.productRepository.deleteImage(image);
  }
}
