import { Product } from "../model/product";

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: string): Promise<Product>;
  abstract create(product: Product): Promise<Product>;
  abstract update(product: Product, id: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
  abstract deleteImage(id: string, image: string): Promise<boolean>;
  abstract markImage(id: string, image: string): Promise<boolean>;
}
