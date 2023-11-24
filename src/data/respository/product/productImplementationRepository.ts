import { Db } from "@/data/dataSource/db";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";

export class ProductImplementationRepository implements ProductRepository {
  constructor(private db: Db<Omit<Product, "id">>) {}

  async create(product: Product): Promise<string> {
    const { id, ...newProduct } = product;
    const response = await this.db.addDocument(newProduct);
    return response.id;
  }

  async update(product: Product, uid: string): Promise<boolean> {
    const { id, ...updateProduct } = product;
    await this.db.updateDocument(updateProduct, uid);
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.db.deleteDocument(id);
    return true;
  }

  async findAll(): Promise<Product[]> {
    const response = await this.db.getDocuments();
    const products: Product[] = [];
    response.forEach((doc) =>
      products.push({ id: doc.id, ...doc.data() } as Product)
    );
    return products;
  }

  async findById(id: string): Promise<any> {
    const response = await this.db.getDocument(id);
    return { id: response.id, ...response.data() } as Product;
  }
}
