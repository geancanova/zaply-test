import { supabase } from "./supabase";
import { Product, ProductFilter } from "@/types";

export async function fetchProducts(
  filters: ProductFilter = {},
  page = 1,
  pageSize = 12
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("products")
    .select("*", { count: "exact" })
    .range(from, to);

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

  const { data, count, error } = await query;

  if (error) throw new Error(error.message);

  return {
    products: data as Product[],
    total: count ?? 0,
  };
}

export async function fetchProduct(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data as Product;
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
