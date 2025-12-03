import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" />, level: 80 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} color="#38B2AC" />,
    level: 95,
  },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#264DE4" />, level: 90 },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} color="#F0DB4F" />,
    level: 90,
  },
  { name: "Express.js", icon: <FaNodeJs size={40} color="#000" />, level: 80 },
  {
    name: "Framer Motion",
    icon: <FaReact size={40} color="#FF2D55" />,
    level: 85,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-11/12 px-6 lg:px-16 py-16 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center science-font">
        Skills 💻
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--color-secondary-bg)] rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer relative group shadow-lg border border-white/10 hover:border-[var(--color-primary)] transition"
          >
            {/* Skill Icon */}
            <div className="mb-4">{skill.icon}</div>

            {/* Skill Name */}
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>

            {/* Hover Reveal Proficiency Bar */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: `${skill.level}%` }}
              transition={{ duration: 0.5 }}
              className="h-2 bg-[var(--color-primary)] rounded-full mt-2 w-0"
            ></motion.div>

            {/* Optional Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-sm">{skill.level}% Proficiency</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
