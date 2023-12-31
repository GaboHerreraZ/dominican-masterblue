import { Filter } from "../model/filter";
import { Product } from "../model/product";

export abstract class ProductRepository {
  abstract filterProduct(filter: Filter): Promise<Product[]>;
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: string): Promise<Product>;
  abstract create(product: Product): Promise<Product>;
  abstract update(product: Product, id: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
  abstract deleteImage(image: string): Promise<boolean>;
  abstract markImage(image: string, name: string): Promise<boolean>;
}
