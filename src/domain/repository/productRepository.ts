import { Product } from "../model/product";

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: string): Promise<Product>;
  abstract create(product: Product): Promise<string>;
  abstract update(product: Product, id: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
}
