import Header from "@/components/Header";
import BaseLayout from "@/components/BaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaply - Detalhes do Produto",
  description: "Visualize os detalhes do produto",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout>
      <Header />
      <main className="max-w-4xl m-auto p-4">{children}</main>
    </BaseLayout>
  );
}
