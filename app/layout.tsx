import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from './Component/Sidebar';
import Navbar from "./Component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemant Chaubey Portfolio",
  description: "Portfolio personal resume of Hemant Omprakash Chuabey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex">
      {/* Sidebar for Desktop */}

      <Sidebar />

      {/* Navbar for Mobile */}
      <Navbar />
      {/* Main Content Area */}
      <main className="w-[80vw] ml-auto p-6" style={{width:"80vw"}}>{children}</main>
    </body>
  </html>
  );
}
