export interface Product {
  id: string;
  spanishName: string;
  englishName: string;
  price: number;
  state: boolean;
  spanishDescription: string;
  englishDescription: string;
  material: string;
  weight?: number;
  height?: number;
  length?: number;
  width?: number;
  quantity: number;
  colors?: string[];
  youTubeLink?: string;
  category?: string;
  images?: string[];
}
