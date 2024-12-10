import About from "./About/page";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="about" className="h-screen px-6 py-10">
        <About />
      </section>
    </main>
  );
}
