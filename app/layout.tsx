import Filter from "@/components/Filter";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaply - Product Panel",
  description: "Zaply frontend challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
