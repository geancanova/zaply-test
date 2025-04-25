export default function formatCurrency(value: string | number) {
  const number = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(number)) return value;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}
