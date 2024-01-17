import { SimpleFilter } from "../model/filter";
import { Product } from "../model/product";

export abstract class ProductRepository {
  abstract filterProduct(filter: SimpleFilter): Promise<Product[]>;
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: string): Promise<Product>;
  abstract create(product: Product): Promise<Product>;
  abstract update(product: Product, id: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
  abstract deleteImage(image: string, product: Product): Promise<boolean>;
  abstract markImage(image: string, name: string, id: string): Promise<boolean>;
}
