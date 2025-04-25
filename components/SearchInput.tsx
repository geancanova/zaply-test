"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState("");

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch(inputValue);
    }
  }

  return (
    <div className="flex gap-2.5 w-full mb-8">
      <input
        type="text"
        defaultValue={searchParams.get("term")?.toString()}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar produto por nome"
        className="w-full h-12 px-4 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-200"
      />
      <button
        onClick={() => handleSearch(inputValue)}
        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
      >
        Buscar
      </button>
    </div>
  );
}
