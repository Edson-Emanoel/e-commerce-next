import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ProvedorCarrinho } from "./data/contexts/ContextoCarrinho";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Meu E-commerce",
  description: "E-commerce de produtos eletrônicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvedorCarrinho>
          {children}
        </ProvedorCarrinho>
      </body>
    </html>
  );
}
