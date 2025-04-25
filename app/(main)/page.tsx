import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";
import { ProductFilter } from "@/types";
import { Suspense } from "react";

function generateFilterKey(filters: ProductFilter): string {
  return [
    filters.term ?? "",
    filters.categories ?? "",
    filters.brand ?? "",
    filters.priceRange ?? "",
  ].join("|");
}

export default async function ProductsPage(props: {
  searchParams?: Promise<ProductFilter & { page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const term = searchParams?.term || "";
  const categories = searchParams?.categories;
  const brand = searchParams?.brand;
  const priceRange = searchParams?.priceRange;
  const page = parseInt(searchParams?.page || "1");
  const pageSize = 12;

  const suspenseKey = generateFilterKey({
    term,
    categories,
    brand,
    priceRange,
  });

  return (
    <Suspense key={suspenseKey} fallback={<Spinner />}>
      <ProductList
        term={term}
        categories={categories}
        brand={brand}
        priceRange={priceRange}
        page={page}
        pageSize={pageSize}
      />
    </Suspense>
  );
}
