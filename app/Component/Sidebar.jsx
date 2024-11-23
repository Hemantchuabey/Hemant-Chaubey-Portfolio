"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-full  bg-orange-700 text-white flex-col items-center">
      {/* Profile Image */}
      <Link href="/" className="mt-6">
        <Image
          src="/WhatsApp Image 2024-08-18 at 4.16.46 PM (1).jpeg" // Replace with your image
          alt="Profile"
          className="rounded-full object-cover border-4 border-white items-center w-full"
          width={96}
          height={96}
        />
      </Link>
      {/* Navigation Links */}
      <nav className="mt-10 flex flex-col items-center w-full space-y-6 text-lg">
        {["About", "Experience", "Education", "Skills", "Achievements", "Certifications"].map(
          (item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="w-full text-center px-4 py-2 hover:bg-orange-600 transition-all rounded"
            >
              {item}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
