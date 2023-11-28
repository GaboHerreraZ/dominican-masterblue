import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";
import apiService from "@/lib/apiService";

export class ProductImplementationRepository implements ProductRepository {
  async create(product: Product): Promise<Product> {
    const { id, ...newProduct } = product;
    return await apiService.post<Product>("product", newProduct);
  }

  async update(product: Product, uid: string): Promise<boolean> {
    const { id, ...updateProduct } = product;
    return await apiService.put<boolean>(`product/${uid}`, updateProduct);
  }

  async delete(id: string): Promise<boolean> {
    return await apiService.delete<boolean>(`product/${id}`);
  }

  async findAll(): Promise<Product[]> {
    return await apiService.get<Product[]>("product", {});
  }

  async findById(id: string): Promise<any> {
    return await apiService.get<Product>(`product/${id}`);
  }
}
