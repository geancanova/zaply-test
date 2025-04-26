"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useSetParams } from "@/hooks/useSetParams";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { setParams } = useSetParams();

  const [inputValue, setInputValue] = useState("");

  function handleSearch(term: string) {
    setParams({ term, page: "1" });
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
      <Button type="button" onClick={() => handleSearch(inputValue)}>
        Buscar
      </Button>
    </div>
  );
}
