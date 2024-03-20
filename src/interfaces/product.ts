import { ProductImage } from "@prisma/client";

export interface Product {
  id: string;
  spanishDescription: string;
  englishDescription: string;
  spanishName: string;
  englishName: string;
  slug: string;
  material: string;
  price: number;
  quantity: number;
  state: boolean;
  youtubeLink: string;
  length: number;
  weight: number;
  width: number;
  height: number;
  categoryId: number;
  subcategoryId: number;
  productImage: ProductImage[];
  images?: FileList;
}
