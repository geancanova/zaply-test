import ButtonIcon from "@/components/ButtonIcon";
import ProductCardImage from "@/components/ProductCardImage";
import { Product } from "@/types";
import { Edit, Trash } from "@deemlol/next-icons";

export default function ProductCard({
  id,
  image,
  name,
  categories,
  price,
  brand,
}: Product) {
  return (
    <div
      key={id}
      className="group relative flex flex-col rounded-lg p-4 shadow-sm overflow-hidden"
    >
      <ProductCardImage src={image} alt={name} />
      <span className="bg-gray-200 text-gray-600 py-0.5 px-2 rounded-full text-xs self-start font-[family-name:var(--font-roboto)]">
        {categories}
      </span>
      <h2 className="text-lg/tight font-semibold mt-2 mb-4">{name}</h2>
      <div className="flex justify-between gap-3.5 text-sm text-gray-400 mt-auto">
        <span>{brand}</span>
        <span className="text-gray-500 font-bold">R$ {price}</span>
      </div>

      <div className="flex flex-col gap-2 z-10 absolute right-0 top-0 pt-2 pr-2 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
        <ButtonIcon title="Edit">
          <Edit size={24} color="#fff" />
        </ButtonIcon>
        <ButtonIcon title="Delete" type="delete">
          <Trash size={24} color="#fff" />
        </ButtonIcon>
      </div>
    </div>
  );
}
