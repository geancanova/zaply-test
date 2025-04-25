import "@/app/globals.css"; // certifique-se de usar o caminho correto
import Header from "@/components/Header";
import { Roboto, Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
