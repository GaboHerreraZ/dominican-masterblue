import { SimpleFilter } from "@/domain/model/filter";
import { Product } from "@/domain/model/product";
import { ProductRepository } from "@/domain/repository/productRepository";
import { Db } from "@/lib/db";
import { storage } from "@/lib/firebase";
import { Query, getDocs, orderBy, query, where } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export class ProductImplementationRepository implements ProductRepository {
  constructor(private db: Db<Omit<Product, "id">>) {}

  async create(product: Product): Promise<Product> {
    product.price = Number(product.price);
    const { id, ...productWithoutId } = product;
    const response = await this.db.addDocument(productWithoutId);
    return { id: response.id } as Product;
  }

  async update(
    product: Product | Partial<Product>,
    uid: string
  ): Promise<boolean> {
    const { id, ...updateProduct } = product;
    updateProduct.price = Number(updateProduct.price);
    await this.db.updateDocument(updateProduct, uid);
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.db.deleteDocument(id);
    return true;
  }

  async deleteImage(image: string, product: Product): Promise<boolean> {
    if (image === product.mainImage) {
      product.mainImage = "";
      product.urlImage = "";
      await this.update(product, product.id);
    }

    const desertRef = ref(storage, image);

    await deleteObject(desertRef);
    return true;
  }

  async markImage(image: string, name: string, id: string): Promise<boolean> {
    const product: Partial<Product> = {
      mainImage: name,
      urlImage: `https://firebasestorage.googleapis.com${image}`,
    };

    await this.update(product, id);
    return true;
  }

  async findById(id: string): Promise<Product> {
    const response = await this.db.getDocument(id);
    const product = response.docs[0].data() as Product;
    const images = await this.db.getImagesById(product.id);
    product.images = images;
    return product;
  }

  async findAll(): Promise<Product[]> {
    const response = await this.db.getDocuments();
    const products = response.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Product)
    );

    const promisesImages: Promise<({ name: string } & { url: string })[]>[] =
      [];
    products.forEach((product) => {
      promisesImages.push(this.db.getImagesById(product.id));
    });

    const images = await Promise.all(promisesImages);

    products.forEach((product, index) => {
      product.images = images[index];
    });

    return products;
  }

  async filterProduct(filter: SimpleFilter): Promise<Product[]> {
    const instance = this.db.getDocumentsInstance();

    let queryFilter: Query = query(
      instance,
      orderBy("price", filter.orderBy as "asc" | "desc")
    );

    if (filter.subcategories.length === 0 && filter.category) {
      queryFilter = query(
        instance,
        where("category", "==", filter.category),
        where("price", ">=", filter.price[0]),
        where("price", "<=", filter.price[1]),
        orderBy("price", filter.orderBy as "asc" | "desc")
      );
    }

    if (filter.subcategories.length > 0 && filter.category) {
      queryFilter = query(
        instance,
        where("category", "==", filter.category),
        where("subCategory", "in", filter.subcategories),
        where("price", ">=", filter.price[0]),
        where("price", "<=", filter.price[1]),
        orderBy("price", filter.orderBy as "asc" | "desc")
      );
    }

    const docs = await getDocs(queryFilter);

    const products = docs.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Product)
    );

    const promisesImages: Promise<({ name: string } & { url: string })[]>[] =
      [];

    products.forEach((product) => {
      promisesImages.push(this.db.getImagesById(product.id));
    });

    const images = await Promise.all(promisesImages);

    products.forEach((product, index) => {
      product.images = images[index];
    });

    return products;
  }
}
