import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

export default function Aboutme() {
  return (
    <>
      {/* <Helmet>
        <title>About Me</title>
        <meta name="description" content="Uhai Mong Portfolio Description" />
      </Helmet>
      ; */}
      <motion.section
        id="aboutme"
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="w-11/12 mx-auto h-14 px-5 flex justify-between items-center border-b-2 border-indigo-500 text-3xl font-bold text-[var(--color-text)]">
          <h1>About Me</h1>
          <IoPersonSharp />
        </div>
        <div className="w-11/12 px-6 lg:px-16 py-16 text-white flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Personal Information */}
          <div
            // initial={{ x: -50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8 }}
            className="relative group mx-auto lg:mx-0"
          >
            <h2 className="text-2xl font-medium playfair-font mb-4">
              Personal Information
            </h2>
            <div className="justify-sart items-center grid grid-cols-12">
              <span className="science-font col-span-4">Name</span>
              <span className="playfair-font font-bold border-b-2 border-b-indigo-500 uppercase col-span-8">
                : Uhai Mong
              </span>
            </div>
            <div className="justify-sart items-center grid grid-cols-12">
              <span className="science-font col-span-4">Age</span>
              <span className="playfair-font font-bold border-b-2 border-b-indigo-500 uppercase col-span-8">
                : 26 Years
              </span>
            </div>
            <div className="justify-sart items-center grid grid-cols-12">
              <span className="science-font col-span-4">Address</span>
              <span className="playfair-font font-bold border-b-2 border-b-indigo-500 uppercase col-span-8">
                : Bandarban, Chattogram
              </span>
            </div>
            <div className="justify-sart items-center grid grid-cols-12">
              <span className="science-font col-span-4">Email</span>
              <span className="playfair-font font-bold border-b-2 border-b-indigo-500 uppercase col-span-8">
                : uhaimong.me@gmail.com
              </span>
            </div>
            <div className="justify-sart items-center grid grid-cols-12">
              <span className="science-font col-span-4">Phone</span>
              <span className="playfair-font font-bold border-b-2 border-b-indigo-500 uppercase col-span-8">
                : +8801516341885
              </span>
            </div>
          </div>

          {/* Right: About Content */}
          <div
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold mb-4 science-font">
              Full Stack Web Developer
            </h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              Hello! I'm <span className="font-semibold">Uhai Mong Marma</span>,
              a passionate Full Stack Web Developer specialized in{" "}
              <span className="font-semibold">
                JavaScript, React, Node.js, Express.js, and MongoDB
              </span>
              and modern web technologies. I love building functional,
              responsive, and high-performance web applications that solve
              real-world problems. I professionaly working on web development
              for 2+ years. Growing expertise on Djang, RESTFul API for better
              performance. I have completed some incridible projects which is
              fully functional, mobile responsive and high parformance. You can
              check it in projects section.
            </p>
            <p>
              P.S If you've the pleasure of working together, I truely
              appreciate it. Thank You for your time.
            </p>

            {/* Stats or Highlights */}
            <div className="flex flex-wrap gap-6 mt-4">
              <div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
              >
                <FaAward size={24} color="#5a61ff" />
                <span className="font-semibold">2+ Years Experience</span>
              </div>

              <div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
              >
                <FaProjectDiagram size={24} color="#5a61ff" />
                <span className="font-semibold">10+ Projects</span>
              </div>

              <div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-2 bg-[var(--color-secondary-bg)] p-4 rounded-xl w-32 shadow-lg border border-white/10"
              >
                <FaBriefcase size={24} color="#5a61ff" />
                <span className="font-semibold">Freelance Work</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
