"use client";
import "./styles.scss";
import About from "./about/About";
import Projects from "./projects/Projects";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
export default function Home() {
  const boxRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: "-100vw",
        opacity: 0,
      },
      {
        x: "0vw",
        opacity: 1,
        duration: 4,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <>
      {/* <div className="box" ref={boxRef}></div> */}
      <section className="w-full h-screen m-0 p-0 flex items-center flex-row justify-center bg-gray-50 sec1 gap-x-24">
        <div className="flex- flex-col items-center">
          <h1
            className="text-5xl font-bold text-gray-800 presentacion"
            ref={boxRef}
          >
            Hi, I&apos;m Juan
          </h1>
          <p className="text-xl text-gray-600 mb-8 presentacion2 py-4">
            FullStack Web Developer
          </p>
          <div>
            <a
              href="#about"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 buttonText"
            >
              Learn More About Me
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/images/juan.png"
            alt="Juan's Image"
            width={400}
            height={400}
            className="rounded-full shadow-lg pixelated"
          />
        </div>
      </section>
      <About />
      <Projects />
    </>
  );
}
