import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <motion.div
        className="text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Ejecuta la animación al entrar en el viewport
        viewport={{ once: false, amount: 0.5 }} // Configura el comportamiento del viewport
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 presentacion">
          About Me
        </h2>
        <p className="text-gray-600 presentacion2">
          I am a passionate frontend developer with a strong interest in
          creating beautiful and functional user interfaces.
        </p>
      </motion.div>
    </section>
  );
}
