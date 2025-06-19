import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Main = () => {
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
    </>
  );
};
export default Main;
