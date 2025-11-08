import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub User Lists",
  description: "GitHub User Lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
