import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="min-h-screen px-6 lg:px-16 py-16 text-white flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Left: Profile Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-72 h-72 relative group mx-auto lg:mx-0"
      >
        <img
          src="/UhaiMongProfilePicture.jpg"
          alt="Uhai Mong"
          className="w-full h-full rounded-full object-cover border-4 border-[var(--color-primary)] shadow-xl"
        />
        {/* Subtle hover glow */}
        <div className="absolute inset-0 rounded-full ring-4 ring-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition blur-md"></div>
      </motion.div>

      {/* Right: About Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-bold mb-4 science-font">About Me</h2>
        <p className="text-[var(--color-text)] leading-relaxed">
          Hello! I’m <span className="font-semibold">Uhai Mong Marma</span>, a
          passionate Full Stack Web Developer specialized in{" "}
          <span className="font-semibold">React, Node.js, MongoDB</span>
          and modern web technologies. I love building beautiful, responsive,
          and high-performance web applications that solve real-world problems.
        </p>

        {/* Stats or Highlights */}
        <div className="flex flex-wrap gap-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
          >
            <FaAward size={24} color="#5a61ff" />
            <span className="font-semibold">2+ Years Experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
          >
            <FaProjectDiagram size={24} color="#5a61ff" />
            <span className="font-semibold">10+ Projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
          >
            <FaBriefcase size={24} color="#5a61ff" />
            <span className="font-semibold">Freelance Work</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
