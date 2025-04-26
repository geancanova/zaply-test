import { Button } from "@/components/Button";

interface PaginationProps {
  curPage: number;
  totalPages: number;
}

export default function Pagination({ curPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {curPage > 1 && <Button href={`?page=${curPage - 1}`}>Anterior</Button>}

      <span className="text-gray-600">
        Página {curPage} de {totalPages}
      </span>

      {curPage < totalPages && (
        <Button href={`?page=${curPage + 1}`}>Próxima</Button>
      )}
    </div>
  );
}
