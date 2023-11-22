import { Db } from "@/data/dataSource/db";
import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Product } from "@/domain/model/product";
import { CreateProductUseCase } from "@/domain/useCase/product/createUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";

export default function ProductService() {
  const productDb = new Db<Product>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const createProductsUseCase = new CreateProductUseCase(productImplementation);
  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  async function createProduct(product: Product) {
    return await createProductsUseCase.execute(product);
  }

  async function getProducts() {
    return await getProductsUseCase.execute();
  }

  async function getProductById() {
    return await getProductByIdUseCase.execute("1vIA7kRyXGcS8S2Yorhu");
  }

  return {
    getProducts,
    getProductById,
  };
}
