interface PaginationProps {
  curPage: number;
  totalPages: number;
}

export default function Pagination({ curPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {curPage > 1 && (
        <a
          href={`?page=${curPage - 1}`}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
        >
          Anterior
        </a>
      )}

      <span className="text-gray-600">
        Página {curPage} de {totalPages}
      </span>

      {curPage < totalPages && (
        <a
          href={`?page=${curPage + 1}`}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
        >
          Próxima
        </a>
      )}
    </div>
  );
}
