import { Category, SubCategory } from "@/utils/const";

export interface Filter {
  price: number[];
  category: Category;
  subcategories: SubCategory[];
  orderBy: OrderBy;
}

export interface SimpleFilter {
  price: number[];
  category: string;
  subcategories: string[];
  orderBy: string;
}

export type OrderBy = "asc" | "desc";
