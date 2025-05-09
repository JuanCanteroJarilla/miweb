export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center"
      >
        <div className="max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <img
                src="/images/project1.png"
                alt="Project 1"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  E-commerce App
                </h3>
                <p className="text-gray-600 mt-2">
                  A scalable e-commerce platform built with React and Node.js.
                </p>
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
                {/* <a
                  href="https://github.com/yourusername/ecommerce-app"
                  target="_blank"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Project
                </a> */}
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <img
                src="/images/project2.png"
                alt="Project 2"
                className="w-full h-48 object-cover"
              /> */}
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
                {/* <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Project
                </a> */}
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <img
                src="/images/project3.png"
                alt="Project 3"
                className="w-full h-48 object-cover"
              /> */}
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
                {/* <a
                  href="https://github.com/yourusername/dashboard-app"
                  target="_blank"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Project
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
