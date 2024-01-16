import { SimpleFilter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";
import apiService from "@/lib/apiService";

export class ProductImplementationRepository implements ProductRepository {
  async filterProduct(filter: SimpleFilter): Promise<Product[]> {
    return await apiService.post<Product[]>("product/filter", filter, {
      cache: "no-store",
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
      cache: "no-store",
    });
  }

  async findById(id: string): Promise<Product> {
    return await apiService.get<Product>(`product/${id}`, {
      cache: "no-store",
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
