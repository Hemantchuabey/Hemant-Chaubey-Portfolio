import Image from "next/image";
import About from './About/page'
import Experience from './Experience/page'
export default function Home() {
  return (
  
    <main className="ml-[20vw] flex flex-col">
    <section id="about" className="h-screen px-6 py-10">
      <h1 className="text-4xl font-bold">About Me</h1>
      {/* About content here */}
      <About/>
    </section>

    <section id="experience" className="h-auto px-6 py-10">
      <Experience />
    </section>

    {/* Add other sections (Education, Skills, etc.) */}
  </main>
  
  );
}

    // <div>

    //   {/* <About/> */}
    //   <Experience/>
    // </div>