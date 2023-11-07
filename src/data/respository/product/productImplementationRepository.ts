import { Db } from "@/data/dataSource/db";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class ProductImplementationRepository implements ProductRepository {
  constructor(private db: Db<Product>) {}

  async create(product: Product): Promise<boolean> {
    await this.db.addDocument(product);
    return true;
  }

  async update(product: Product, id: string): Promise<boolean> {
    await this.db.updateDocument(product, id);
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.db.deleteDocument(id);
    return true;
  }

  async findAll(): Promise<Product[]> {
    const response = await this.db.getDocuments();
    const products: Product[] = [];
    response.forEach((doc) => {
      products.push(doc.data() as Product);
    });
    return products;
  }

  async findById(id: string): Promise<any> {
    const response = await this.db.getDocument(id);
    response.data();
    return response.data() as Product;
  }
}
