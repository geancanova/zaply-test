import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="grid place-items-center">
      <Spinner />
      <p className="text-gray-400 text-xl">Carregando...</p>
    </div>
  );
}
