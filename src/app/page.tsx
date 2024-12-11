import About from "./Component/About/page";
import Certifications from "./Component/Certification/page";
import Education from "./Component/Education/page";
import Experience from "./Component/Experience/page";
import Interest from "./Component/Interest/page";
import Projects from "./Component/Projects/page";
import Skills from "./Component/Skills/page";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="about" className="h-screen px-6 py-10">
        <About />
      </section>
      <section id="experience" className="h-full md:h-screen px-6 py-10">
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
      <section id="interest" className="h-screen px-6 py-10">
        <Interest />
      </section>
    </main>
  );
}
