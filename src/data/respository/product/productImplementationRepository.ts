import { Filter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";
import apiService from "@/lib/apiService";

export class ProductImplementationRepository implements ProductRepository {
  async filterProduct(filter: Filter): Promise<Product[]> {
    return await apiService.post<Product[]>("product/filter", filter, {
      next: {
        revalidate: 60,
      },
    });
  }

  async create(product: Product): Promise<Product> {
    const { id, ...newProduct } = product;
    newProduct.price = Number(newProduct.price);
    return await apiService.post<Product>("product", newProduct);
  }

  async update(product: Product, uid: string): Promise<boolean> {
    const { id, ...updateProduct } = product;
    updateProduct.price = Number(updateProduct.price);
    return await apiService.put<boolean>(`product/${uid}`, updateProduct);
  }

  async delete(id: string): Promise<boolean> {
    return await apiService.delete<boolean>(`product/${id}`);
  }

  async findAll(): Promise<Product[]> {
    return await apiService.get<Product[]>("product", {
      next: { revalidate: 0 },
    });
  }

  async findById(id: string): Promise<Product> {
    return await apiService.get<Product>(`product/${id}`, {
      next: { revalidate: 0 },
    });
  }

  async deleteImage(image: string): Promise<boolean> {
    return await apiService.delete<boolean>(
      `product/deleteImage/${encodeURIComponent(image)}`
    );
  }

  async markImage(image: string, name: string): Promise<boolean> {
    return await apiService.get<boolean>(
      `product/markImage/${encodeURIComponent(image)}/${encodeURIComponent(
        name
      )}`
    );
  }
}
