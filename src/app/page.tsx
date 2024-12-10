import About from "./About/page";
import Certifications from "./Certification/page";
import Education from "./Education/page";
import Experience from "./Experience/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="about" className="h-screen px-6 py-10">
        <About />
      </section>
      <section id="experience" className="h-screen px-6 py-10">
        <Experience />
      </section>
      <section id="skills" className="h-full px-6 py-10">
        <Skills />
      </section>
      <section id="projects" className="h-full px-6 py-10">
        <Projects />
      </section>
      <section id="education" className="h-screen px-6 py-10">
        <Education />
      </section>
      <section id="certification" className="h-screen px-6 py-10">
        <Certifications />
      </section>
    </main>
  );
}
