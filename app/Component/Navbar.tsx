"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* lg:hidden fixed top-0 left-0 w-full bg-orange-700 text-white flex items-center justify-between px-4 py-3 z-50 */}
      {/* Logo / Name */}
      <Link href="/">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
