import About from "./About/page";
import Experience from "./Experience/page";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="about" className="h-screen px-6 py-10">
        <About />
      </section>
      <section id="experience" className="h-screen px-6 py-10">
        <Experience />
      </section>
    </main>
  );
}
