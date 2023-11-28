import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";

export default function ProductService() {
  const productImplementation = new ProductImplementationRepository();

  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  async function findAll() {
    return await getProductsUseCase.execute();
  }

  async function findById(id: string) {
    return await getProductByIdUseCase.execute(id);
  }

  return {
    findAll,
    findById,
  };
}
