export interface Filter {
  price: number[];
  categories: string[];
  subcategories: string[];
  orderBy: OrderBy;
}

export type OrderBy = "asc" | "desc";
