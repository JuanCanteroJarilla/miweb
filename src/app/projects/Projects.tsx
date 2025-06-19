// import { motion } from "framer-motion";

export default function Projects() {
  // const projects = [
  //   {
  //     title: "m-automocion",
  //     description:
  //       "A scalable e-commerce platform built with React and Node.js.",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //   },
  // ];
  return (
    <>
      <section
        id="projects"
        className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center sec3"
      >
        {/* <motion.div
          className="text-center max-w-4xl mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} // Ejecuta la animación al entrar en el viewport
          viewport={{ once: false, amount: 0.5 }} // Configura el comportamiento del viewport
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center presentacion">
              Projects
            </h2>
            <div className="flex flex-row mb-2 gap-8">
              <div className="skillsDiv inline-block w-auto">
                <div className="p-4">
                  <p className="text-xl font-semibold text-gray-800 text-left truncate">
                    E-commerce App
                  </p>
                  <hr className="border-t-2 border-gray-300 mb-4" />

                  <h4 className="text-gray-600 mt-2 text-left">
                    A scalable e-commerce platform built with React and Node.js.
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">
                      React
                    </span>
                    <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="bg-purple-100 text-purple-600 text-sm px-2 py-1 rounded">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Portfolio Website
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A personal portfolio website to showcase my skills and
                    projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Dashboard App
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A real-time dashboard for monitoring business KPIs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">
                      Vue.js
                    </span>
                    <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">
                      Firebase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
        <h2 className="text-3xl font-bold text-gray-800 text-center presentacion">
          COMING SOON!
        </h2>
        <p className="text-gray-600 presentacion2">
          At the moment I&#39;m working in this section to show all my
          professional and personal projects!
        </p>
      </section>
    </>
  );
}
