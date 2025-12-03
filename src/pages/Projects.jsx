import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React, Tailwind & Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "project1.jpg",
    live: "https://example.com",
    github: "https://github.com/example",
    category: "fullstack",
  },
  {
    title: "E-Commerce App",
    desc: "Full-featured MERN e-commerce app with cart, auth & admin panel.",
    tech: ["MERN", "Stripe", "JWT"],
    img: "project2.jpg",
    live: "#",
    github: "#",
    category: "fullstack",
  },
  {
    title: "Real-time Chat App",
    desc: "Socket.io based chat app with private rooms & typing indicators.",
    tech: ["React", "Node", "Socket.io"],
    img: "project3.jpg",
    live: "#",
    github: "#",
    category: "fullstack",
  },
  {
    title: "Landing Page Template",
    desc: "Beautiful creative template design for landing pages.",
    tech: ["HTML", "CSS", "JS"],
    img: "project4.png",
    live: "#",
    github: "#",
    category: "templates",
  },
  {
    title: "Creative Design Mockup",
    desc: "Modern creative design for UI/UX showcase.",
    tech: ["Figma", "Photoshop"],
    img: "project5.png",
    live: "#",
    github: "#",
    category: "creative",
  },
  {
    title: "A full UI/UX Template",
    desc: "Modern creative design for UI/UX showcase.",
    tech: ["Figma", "Photoshop"],
    img: "project6.jpg",
    live: "#",
    github: "#",
    category: "creative",
  },
];

export default function Projects() {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === category);

  return (
    <div
      id="projects"
      className="w-11/12 py-16 px-6 lg:px-16 text-[var(--color-text)]"
    >
      {/* 🔹 Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {["all", "templates", "fullstack", "creative"].map((tab) => (
          <button
            key={tab}
            onClick={() => setCategory(tab)}
            className={`px-4 py-2 font-bold rounded-xl shadow-2xl text-sm capitalize transition cursor-pointer
            ${
              category === tab
                ? "bg-[var(--color-primary)]"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tab.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* 🔹 Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded overflow-hidden group cursor-pointer bg-[var(--color-secondary-bg)] shadow-lg border border-white/10 hover:border-[var(--color-primary)] transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-52 w-full object-cover"
            />

            {/* Hover Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center gap-2 text-center opacity-0 group-hover:opacity-100 p-4"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm opacity-80">{project.desc}</p>

              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-3 py-1 bg-[var(--color-primary)] text-white rounded hover:opacity-90 transition"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-1 border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
