"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const links = useMemo(
    () => [
      { name: "About", id: "about" },
      // { name: "Experience", id: "experience" },
      // { name: "Skills", id: "skills" },
      // { name: "Projects", id: "projects" },
      // { name: "Education", id: "education" },
      // { name: "Certifications", id: "certification" },
      // { name: "Interest", id: "interest" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      let currentSection = activeSection;

      sections.forEach((section) => {
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links, activeSection]);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Immediately update the active section
    }
  };

  return (
    <aside
      className="hidden lg:flex fixed top-0 left-0 h-full bg-orange-700 text-white flex-col items-center"
      style={{ width: "20vw" }}
    >
      {/* Profile Image */}
      <Link href="/" className="w-full flex items-center justify-center mt-4">
        <Image
          src="/ProfilePic.jpeg"
          alt="Profile"
          className="w-[35%] h-[100%] hover:w-[34%] hover:h-[99%] rounded-3xl transition-all 0.3 ease-in"
          width={96}
          height={24}
        />
      </Link>

      {/* Navigation Links */}
      <nav
        className="mt-44 flex flex-col items-center w-full space-y-6 text-lg"
        style={{ marginTop: "2.5rem" }}
      >
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              handleLinkClick(item.id);
            }}
            className={`w-full text-center px-4 py-2 rounded transition-all 0.3 ease-in ${
              activeSection === item.id
                ? "bg-orange-600 text-white font-semibold"
                : "hover:bg-orange-600 hover:scale-95 hover:font-semibold text-gray-300 0.3 ease-in"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
