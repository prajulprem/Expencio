import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expencio",
  description: "Your personal finance tracker app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container max-w-2xl mx-auto px-6 py-6">
        <Header />{children}</div></body>
    </html>
  );
}
