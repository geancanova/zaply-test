import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/lib/data-service";
import { ProductFilter } from "@/types";

interface ProductListProps extends ProductFilter {
  page: number;
  pageSize: number;
}

export default async function ProductList({
  term,
  categories,
  brand,
  priceRange,
  page,
  pageSize,
}: ProductListProps) {
  const { products, total } = await fetchProducts(
    {
      term,
      categories,
      brand,
      priceRange,
    },
    page,
    pageSize
  );

  if (!products || products.length === 0) {
    return (
      <div className="py-4">
        <p className="text-3xl font-semibold text-center text-gray-400">
          Nenhum produto encontrado
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Pagination curPage={page} totalPages={totalPages} />
    </>
  );
}
