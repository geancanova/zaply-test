import ProductForm from "@/components/ProductForm";
import { ArrowLeft } from "@deemlol/next-icons";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaply - Novo Produto",
  description: "Adicionar um novo produto",
};

export default function NewProductPage() {
  return (
    <main className="max-w-4xl m-auto p-4">
      <div className="flex items-center gp-4 justify-between mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition duration-200"
        >
          <ArrowLeft size={24} color="currentColor" />
          Voltar
        </Link>
        <h1 className="font-semibold text-2xl">Novo Produto</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-sm rounded-lg">
        <div className="p-4 shrink-0 w-[350px] max-w-full"></div>
        <div className="bg-gray-50 border-l border-l-gray-200 w-full p-4 rounded-lg rounded-l-none">
          <ProductForm />
        </div>
      </div>
    </main>
  );
}
