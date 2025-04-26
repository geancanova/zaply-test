import Link from "next/link";
import { Button } from "@/components/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 bg-gray-100 p-4 shadow-sm mb-4">
      <h1 className="text-xl font-bold text-gray-400 font-[family-name:var(--font-roboto)]">
        <Link href={"/"} className="text-gray-400">
          Zaply - Product Panel
        </Link>
      </h1>
      <Button href={"/produto/novo"}>Adicionar Produto</Button>
    </header>
  );
}
