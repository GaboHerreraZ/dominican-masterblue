import { UseCase } from "@/base/useCase";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class DeleteImageProductUseCase
  implements UseCase<{ image: string; product: Product }, boolean>
{
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute({
    image,
    product,
  }: {
    image: string;
    product: Product;
  }): Promise<boolean> {
    return this.productRepository.deleteImage(image, product);
  }
}
