"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {

  const [activeSection, setActiveSection] = useState("about");

  const links = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "achievements" },
    { name: "Certifications", id: "certifications" },
  ];

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-full bg-orange-700 text-white flex-col items-center" style={{width:"20vw"}}>
      {/* Profile Image */}
      <Link href="/" className="w-full flex items-center justify-center mt-4" >
        <Image
          src="/WhatsApp Image 2024-08-18 at 4.16.46 PM (1).jpeg" // Replace with your image
          alt="Profile"
          className="w-[35%] rounded-3xl"
          width={96}
          height={56}
        />
      </Link>

      {/* Navigation Links */}
      <nav className="mt-44 flex flex-col items-center w-full space-y-6 text-lg" style={{marginTop:"2.5rem"}}>
        {links.map(
          (item) => (
            <button
              key={item.id}
              href={`#${item.name.toLowerCase()}`}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-center px-4 py-2 rounded transition-all ${
                activeSection === item.id
                  ? "bg-orange-600 text-white font-semibold"
                  : "hover:bg-orange-600 hover:scale-95 text-gray-300"
              }`}
            >
{/* {`w-full text-center px-4 py-2 
                hover:bg-orange-600 hover:scale-95 transition-all rounded`} */}


              {item.name}
            </button>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;


