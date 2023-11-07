import { Db } from "@/data/dataSource/db";
import { ProductImplementationRepository } from "@/data/respository/product/productImplementationRepository";
import { Product } from "@/domain/model/product";
import { CreateProductUseCase } from "@/domain/useCase/product/createUseCase";
import { DeleteProductUseCase } from "@/domain/useCase/product/deleteUseCase";
import { FindAllProductUseCase } from "@/domain/useCase/product/findAllUseCase";
import { FindProductByIdUseCase } from "@/domain/useCase/product/findByIdUseCase";
import { UpdateProductUseCase } from "@/domain/useCase/product/updateUseCase";

export default function ProductService() {
  const productDb = new Db<Product>("products");
  const productImplementation = new ProductImplementationRepository(productDb);

  const createProductsUseCase = new CreateProductUseCase(productImplementation);
  const getProductsUseCase = new FindAllProductUseCase(productImplementation);
  const getProductByIdUseCase = new FindProductByIdUseCase(
    productImplementation
  );

  const updateProductUseCase = new UpdateProductUseCase(productImplementation);
  const deleteProductUseCase = new DeleteProductUseCase(productImplementation);

  async function createProduct(product: Product) {
    return await createProductsUseCase.execute(product);
  }

  async function getProducts() {
    return await getProductsUseCase.execute();
  }

  async function getProductById() {
    return await getProductByIdUseCase.execute("1vIA7kRyXGcS8S2Yorhu");
  }

  async function update() {
    const product: Product = {
      id: "1vIA7kRyXGcS8S2Yorhu",
      name: "Product prueba",
      description: "Product prueba",
      image: "Product prueba",
      price: 20000,
    };
    return await updateProductUseCase.execute(product);
  }

  async function deleteProduct() {
    return await deleteProductUseCase.execute("1vIA7kRyXGcS8S2Yorhu");
  }

  return {
    createProduct,
    getProducts,
    getProductById,
    update,
    deleteProduct,
  };
}
