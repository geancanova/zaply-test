import BaseLayout from "@/components/BaseLayout";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
