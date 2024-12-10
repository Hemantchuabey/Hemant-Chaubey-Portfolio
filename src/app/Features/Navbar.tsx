"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const links = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Interest", id: "interest" },
  ];
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full bg-orange-700 text-white flex items-center justify-between px-4 py-3 z-50">
      {/* Portfolio Name */}
      <Link href="/">
        <h1 className="text-white text-2xl font-bold">Hemant Chaubey</h1>
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
            {links.map(
              (item) => (
                <Link
                  key={item.id}
                  href={`#${item.name.toLowerCase()}`}
                 
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                   className={`w-full text-center px-4 py-2 rounded transition-all 0.3 ease-in ${
                    activeSection === item.id
                      ? "bg-orange-600 text-white font-semibold"
                      : "hover:bg-orange-600 hober:scale-95 text-gray-300"
                  }`}
                >
                  {item.name}
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
