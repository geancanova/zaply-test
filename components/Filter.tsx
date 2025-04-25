import Select from "@/components/Select";
import { fetchBrands, fetchCategories } from "@/lib/data-service";

export default async function Filter() {
  const categories = await fetchCategories();
  const brands = await fetchBrands();

  return (
    <div className="p-4 rounded-lg shadow-sm bg-gray-100 sticky top-4">
      <h3 className="text-md mb-2 font-semibold">Filtrar por:</h3>
      <hr className="mb-2 border-gray-200" />
      <div className="flex flex-col gap-2">
        <Select
          label="Categoria"
          filter="categories"
          options={categories}
          placeholder="Selecione uma categoria"
        />
        <Select
          label="Marca"
          filter="brand"
          options={brands}
          placeholder="Selecione uma marca"
        />
        <Select
          label="Faixa de preço"
          filter="priceRange"
          options={[
            { value: "0-50", label: "R$ 0 - R$ 50" },
            { value: "50-100", label: "R$ 50 - R$ 100" },
            { value: "+100", label: "Acima de R$ 100" },
          ]}
          placeholder="Selecione uma faixa de preço"
        />
      </div>
    </div>
  );
}
