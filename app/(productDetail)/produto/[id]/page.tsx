import NotFound from "@/components/NotFound";
import { fetchProduct } from "@/lib/data-service";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await fetchProduct(id);

  if (!product) {
    return <NotFound message="Produto não encontrado." />;
  }

  return (
    <main className="max-w-4xl m-auto p-4">
      <h1 className="font-semibold text-2xl text-center mb-8">
        Editar Produto: {product.name}
      </h1>
      <div className="flex items-center justify-center gap-4 bg-white shadow-sm rounded-lg">
        <div className="p-4 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>
        <div className="bg-gray-50 border-l border-l-gray-200 w-full p-4 rounded-lg rounded-l-none">
          <form action="" className="flex flex-col gap-4">
            <div>
              <label htmlFor="">Nome do Produto</label>
              <input
                type="text"
                name="name"
                id="name"
                value={product.name}
                className="border border-gray-200 rounded bg-white p-2 w-full"
                placeholder="Nome do Produto"
                required
              />
            </div>
            <div>
              <label htmlFor="">Marca</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={product.brand}
                className="border border-gray-200 rounded bg-white p-2 w-full"
                placeholder="Marca do Produto"
                required
              />
            </div>
            <div>
              <label htmlFor="">Preço</label>
              <input
                type="text"
                name="price"
                id="price"
                value={product.price}
                className="border border-gray-200 rounded bg-white p-2 w-full"
                placeholder="Preço do Produto"
                required
              />
            </div>
            <div>
              <label htmlFor="">Categoria</label>
              <input
                type="text"
                name="price"
                id="price"
                value={product.categories}
                className="border border-gray-200 rounded bg-white p-2 w-full"
                placeholder="Categoria do Produto"
                required
              />
            </div>
            <div>
              <label htmlFor="">Imagem</label>
              <input
                type="file"
                name="image"
                id="image"
                className="border border-gray-200 rounded bg-white p-2 w-full"
                placeholder="Imagem do Produto"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
