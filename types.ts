export interface Product {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

export type ProductFilter = {
  term?: string;
  categories?: string;
  brand?: string;
  priceRange?: "0-50" | "50-100" | "+100";
};
