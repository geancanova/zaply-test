import Header from "@/components/Header";
import Filter from "@/components/Filter";
import SearchInput from "@/components/SearchInput";
import BaseLayout from "@/components/BaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaply - Product Panel",
  description: "Zaply frontend challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout>
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-[237px_1fr] gap-4 max-w-7xl m-auto p-4">
        <aside>
          <Filter />
        </aside>
        <div>
          <SearchInput />
          {children}
        </div>
      </main>
    </BaseLayout>
  );
}
