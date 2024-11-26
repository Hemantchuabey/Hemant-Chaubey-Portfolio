"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
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
        {["About", "Experience", "Education", "Skills", "Achievements", "Certifications"].map(
          (item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="w-full text-center px-4 py-2 hover:bg-orange-600 hover:scale-95 transition-all rounded"
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


