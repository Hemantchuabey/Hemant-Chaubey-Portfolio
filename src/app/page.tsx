import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { EngineeringLab } from "@/components/sections/EngineeringLab";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <EngineeringLab />
      <Projects />
      <Skills />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
