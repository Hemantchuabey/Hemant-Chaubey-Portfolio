import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  const projects = [
    {
      name: "Sneaker-World",
      path: "/Sneakerworld.png",
      link: "https://sneakers-world-hemantchuabey.vercel.app/",
    },
    {
      name: "Tailwind-Food-APP",
      path: "/FoodTailwind.png",
      link: "http://food-tailwind-app.vercel.app/",
    },
    {
      name: "Food-Kart-App",
      path: "/FoodShopKart.png",
      link: "https://food-shop-kart.vercel.app/",
    },
    {
      name: "ETC...",
      path: "/Kanban Board.png",
      link: "https://github.com/Hemantchuabey",
    },
  ];
  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl font-bold mb-6 text-orange-600">Projects</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project) => (
            <Link
              href={project.link}
              className="w-full flex flex-col items-center justify-center mt-4"
              key={project.name}
              target="_blank"
            >
              <Image
                src={project.path}
                alt={project.name}
                className="w-full rounded-3xl hover:scale-95 transition-all 0.3 ease-in-out"
                width={450}
                height={450}
              />
              <h2 className="text-xl text-gray-600 hover:text-gray-900 transition-all 0.3 ease-in-out">
                {project.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
