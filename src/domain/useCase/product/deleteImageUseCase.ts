import { UseCase } from "@/base/useCase";
import { ProductRepository } from "@/domain/repository/productRepository";

export class DeleteImageProductUseCase
  implements UseCase<{ id: string; image: string }, boolean>
{
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(mark: { id: string; image: string }): Promise<boolean> {
    return this.productRepository.deleteImage(mark.id, mark.image);
  }
}
