import { ProductFilter } from "@/types";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/lib/data-service";

export default async function ProductList({
  term,
  categories,
  brand,
  priceRange,
}: ProductFilter) {
  const products = await fetchProducts({
    term,
    categories,
    brand,
    priceRange,
  });

  if (!products || products.length === 0) {
    return (
      <div className="py-4">
        <p className="text-3xl font-semibold text-center text-gray-400">
          Nenhum produto encontrado
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          categories={product.categories}
          price={product.price}
          brand={product.brand}
        />
      ))}
    </div>
  );
}
