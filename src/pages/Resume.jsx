import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Freelance Web Developer",
    period: "2023 - Present",
    desc: "Developed responsive and dynamic web applications using React, Node.js, MongoDB, and Tailwind CSS.",
  },
  {
    title: "Junior Sales Executive",
    period: "2025",
    desc: "Worked at UCB PLC under Mhadi Enterprise handling customer relations and technical sales.",
  },
];

const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    period: "2019 - 2023",
    desc: "Graduated with a focus on web development and modern technologies.",
  },
  {
    title: "Digital Marketing Certification",
    period: "2024",
    desc: "Completed a 4-month intensive digital marketing course at United IT Institute.",
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 90 },
];

export default function Resume() {
  return (
    <>
      {/* <Helmet>
        <title>Rusume</title>
        <meta name="description" content="Perfonal Portfolio Application" />
      </Helmet> */}
      <section
        id="resume"
        className="min-h-screen px-6 lg:px-16 py-16 flex flex-col items-center text-white"
      >
        <h2 className="text-4xl font-bold mb-8 science-font">Resume 📄</h2>

        {/* Resume Paper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[var(--color-secondary-bg)] w-full max-w-4xl rounded-lg shadow-2xl p-8 border border-white/10"
        >
          {/* Download Button */}
          <div className="flex justify-end mb-6">
            <a
              href="/UhaiMong_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded text-white hover:opacity-90 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Timeline Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <FaBriefcase /> Experience
              </h3>
              <div className="relative border-l-2 border-[var(--color-primary)] pl-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6 relative"
                  >
                    <div className="absolute -left-4 top-1 w-3 h-3 bg-[var(--color-primary)] rounded-full border border-white"></div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <span className="text-sm text-[var(--color-text)]">
                      {exp.period}
                    </span>
                    <p className="text-sm mt-1">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <FaGraduationCap /> Education
              </h3>
              <div className="relative border-l-2 border-[var(--color-primary)] pl-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6 relative"
                  >
                    <div className="absolute -left-4 top-1 w-3 h-3 bg-[var(--color-primary)] rounded-full border border-white"></div>
                    <h4 className="text-lg font-semibold">{edu.title}</h4>
                    <span className="text-sm text-[var(--color-text)]">
                      {edu.period}
                    </span>
                    <p className="text-sm mt-1">{edu.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-col gap-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-[var(--color-primary)] rounded"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
