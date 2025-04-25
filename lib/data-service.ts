import { supabase } from "./supabase";
import { Product, ProductFilter } from "@/types";

export async function fetchProducts(filters: ProductFilter = {}) {
  let query = supabase.from("products").select("*");

  if (filters.term) {
    query = query
      .ilike("name", `%${filters.term}%`)
      .order("name", { ascending: true });

    console.log(`filters.term`, filters.term);
  }

  if (filters.categories) {
    query = query.eq("categories", filters.categories);
  }

  if (filters.brand) {
    query = query.eq("brand", filters.brand);
  }

  if (filters.priceRange) {
    switch (filters.priceRange) {
      case "0-50":
        query = query.gte("price", 0).lte("price", 50);
        break;
      case "50-100":
        query = query.gte("price", 50).lte("price", 100);
        break;
      case "+100":
        query = query.gt("price", 100);
        break;
    }
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data as Product[];
}

export async function fetchCategories() {
  const { data, error } = await supabase
    .from("products")
    .select("categories")
    .order("categories", { ascending: true });

  if (error) throw new Error(error.message);

  const categories = data
    .map((item) => item.categories)
    .filter((cat): cat is string => !!cat); // remove nulos/undefined

  return [...new Set(categories)];
}

export async function fetchBrands() {
  const { data, error } = await supabase
    .from("products")
    .select("brand")
    .order("brand", { ascending: true });

  if (error) throw new Error(error.message);

  const brands = data
    .map((item) => item.brand)
    .filter((br): br is string => !!br);

  return [...new Set(brands)];
}
