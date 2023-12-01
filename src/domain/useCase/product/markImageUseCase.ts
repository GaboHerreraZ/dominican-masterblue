import { UseCase } from "@/base/useCase";
import { ProductRepository } from "@/domain/repository/productRepository";

export class MarkImageProductUseCase
  implements UseCase<{ image: string; name: string }, boolean>
{
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(mark: { image: string; name: string }): Promise<boolean> {
    return this.productRepository.markImage(mark.image, mark.name);
  }
}
