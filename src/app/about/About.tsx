import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaVuejs,
  FaCss3Alt,
  FaGit,
  FaLightbulb,
  FaBootstrap,
  FaWind,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
export default function About() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython className="text-blue-500 text-3xl pixelated" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 text-3xl pixelated" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-600 text-3xl pixelated" />,
    },
    {
      name: "Vue",
      icon: <FaVuejs className="text-green-500 text-3xl pixelated" />,
    },
    {
      name: "CSS/SCSS",
      icon: <FaCss3Alt className="text-blue-600 text-3xl pixelated" />,
    },
    {
      name: "Git",
      icon: <FaGit className="text-orange-500 text-3xl pixelated" />,
    },
    {
      name: "UX",
      icon: <FaLightbulb className="text-purple-500 text-3xl pixelated" />,
    },
    {
      name: "TailWindCss",
      icon: <FaWind className="text-purple-500 text-3xl pixelated" />,
    },
    {
      name: "BootStrap",
      icon: <FaBootstrap className="text-purple-500 text-3xl pixelated" />,
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center sec2 justify-center"
    >
      <motion.div
        className="text-center max-w-4xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Ejecuta la animación al entrar en el viewport
        viewport={{ once: false, amount: 0.5 }} // Configura el comportamiento del viewport
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 presentacion">
          About Me
        </h2>
        <p className="text-gray-600 presentacion2">
          I am a passionate fullStack web developer with a strong interest in
          creating beautiful and functional user interfaces.
        </p>
      </motion.div>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row gap-x-16 mb-2">
          <div className="skillsDiv">
            <p className="myStackTitle">My Stack</p>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-center gap-x-2"
                >
                  {skill.icon} {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ maxWidth: "44vw" }}>
            <div className="skillsDiv">
              <p className="myStackTitle">Achievements</p>
              <hr className="border-t-2 border-gray-300 mb-4" />
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  I developed an internal web application for the company to
                  manage automotive clients and sales.
                </li>
                <li>
                  Developed new features and maintained an application for the
                  endoscopic medical sector.
                </li>
                <li>
                  I developed a web platform for monitoring footfall KPIs in
                  commercial spaces.
                </li>
                <li>
                  Developed a tool for managing and creating dynamic work orders
                  on labeling machines, including data monitoring.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
