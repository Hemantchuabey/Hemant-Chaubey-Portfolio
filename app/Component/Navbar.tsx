"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 w-full bg-orange-700 text-white flex items-center justify-between px-4 py-3 z-50">
      {/* Portfolio Name */}
      <Link href="/">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(true)}
        className="text-white text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-orange-700 bg-opacity-90 z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl text-white"
          >
            ×
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-lg text-center">
            {["About", "Experience", "Education", "Skills", "Achievements", "Certifications"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white px-4 py-2 hover:bg-orange-600 hover:scale-95 transition-all rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
