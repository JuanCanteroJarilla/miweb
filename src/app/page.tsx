"use client";
import "./styles.scss";
import About from "./about/About";
import Projects from "./projects/Projects";
import Main from "./main/Main";
export default function Home() {
  return (
    <>
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

      <section className="w-full h-screen m-0 p-0 flex items-center flex-row justify-center bg-gray-50 sec1 gap-x-24 h-screen snap-start">
        <Main />
      </section>
      <section className="h-screen snap-start">
        <About />
      </section>
      <section className="h-screen snap-start">
        <Projects />
      </section>
    </div>
    </>
  );
}
