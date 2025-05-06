"use client";
import "./styles.scss";
import About from "./about/About";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen m-0 p-0 flex items-center justify-center bg-gray-50 sec1">
        <div className="text-center">
          {/* Título principal */}
          <h1 className="text-5xl font-bold text-gray-800 presentacion">
            Hi, I'm Juan
          </h1>
          {/* Subtítulo */}
          <p className="text-xl text-gray-600 mb-8 presentacion2 py-4">
            Frontend Developer
          </p>
          {/* Botón de llamada a la acción */}
          <div>
            <a
              href="#about"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 buttonText"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
