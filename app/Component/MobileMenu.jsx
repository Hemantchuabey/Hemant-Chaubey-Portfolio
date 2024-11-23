"use client";

import Link from "next/link";

const MobileMenu = ({ onClose }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-max bg-orange-700 text-white flex flex-col items-center justify-center space-y-6 z-50">
      {["About", "Experience", "Education", "Skills", "Achievements", "Certifications"].map(
        (item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="text-2xl font-medium hover:underline"
          >
            {item}
          </Link>
        )
      )}
    </nav>
  );
};

export default MobileMenu;
