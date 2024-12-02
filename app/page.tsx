import Image from "next/image";
import About from './About/page'
import Experience from './Experience/page'
import Skills from './Skills/page'
import Projects from './Projects/page'
import Education from './Education/page'
import Certification from './Certification/page'
import Interest from './Interest/page'
export default function Home() {
  return (
  
    <main className="ml-[20vw] flex flex-col">
    <section id="about" className="h-screen px-6 py-10">
      <h1 className="text-4xl font-bold">About Me</h1>

      <About/>
    </section>

    <section id="experience" className="h-full px-6 py-10">
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
      <Certification />
    </section>
    <section id="interest" className="h-screen px-6 py-10">
      <Interest />
    </section>


  </main>
  
  );
}

    // <div>

    //   {/* <About/> */}
    //   <Experience/>
    // </div>