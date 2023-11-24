import { Db } from "@/data/dataSource/db";
import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Product } from "@/domain/model/product";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";

export default function ProductService() {
  const productDb = new Db<Omit<Product, "id">>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  async function getProducts() {
    return await getProductsUseCase.execute();
  }

  async function getProductById(id: string) {
    return await getProductByIdUseCase.execute(id);
  }

  return {
    getProducts,
    getProductById,
  };
}
