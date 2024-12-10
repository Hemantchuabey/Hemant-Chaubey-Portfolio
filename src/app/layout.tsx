import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Features/Navbar";
import Sidebar from "./Features/Sidebar";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        {/* Sidebar for desktop view */}
        <Sidebar/>
        {/* Navbar for mobile view */}
        <Navbar/>
        {/* Main content area */}
        <main className="lg:w-3/4 absolute lg:top-[32%] lg:left-[25%] md:top-[25%] md:left-[20%] sm:top-[25%] sm:left-[15%]" >{children}</main>
      </body>
    </html>
  );
}
