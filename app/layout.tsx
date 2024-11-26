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
      <main className="lg:w-3/4 absolute lg:top-[32%] lg:left-[25%] md:top-[25%] md:left-[20%] sm:top-[25%] sm:left-[15%]" >{children}</main>
    </body>
  </html>
  );
}

