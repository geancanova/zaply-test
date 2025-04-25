export default function NotFound({ message }: { message: string }) {
  return (
    <div className="py-4">
      <p className="text-3xl font-semibold text-center text-gray-400">
        {message}
      </p>
    </div>
  );
}
