import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>Uhai Mong</title>
        <meta name="description" content="Perfonal Portfolio Application" />
      </Helmet> */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-screen bg-[url('hero.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
              <span className="text-center text-5xl pb-3 playfair-font">
                I'm{" "}
                <span className="text-[var(--color-primary)] uppercase">
                  Uhai Mong
                </span>
              </span>

              <Typewriter
                options={{
                  strings: [
                    "A Full Stack Web Developer",
                    "Build Functional Web Application",
                    "2 Years Experience on MERN",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 0,
                  cursor: "|",
                }}
              />
            </h1>
          </div>
        </div>
        {/* <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="hero.jpg"
          alt="Banner Image"
        />
      </div> */}
      </motion.div>
    </>
  );
};

export default Home;

// import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
//       {/* Left Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center lg:text-left"
//       >
//         <h2 className="text-xl text-[var(--color-primary)] tracking-wide uppercase mb-2">
//           👋 Hello, I’m
//         </h2>

//         <h1 className="text-4xl md:text-6xl font-bold science-font leading-tight">
//           Uhai Mong Marma
//         </h1>

//         <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-muted)] mt-2">
//           <Typewriter
//             options={{
//               strings: [
//                 "Full Stack Web Developer 🚀",
//                 "MERN Stack Specialist 💻",
//                 "Passionate Coder & Innovator ✨",
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 60,
//               deleteSpeed: 40,
//             }}
//           />
//         </h3>

//         <p className="mt-4 max-w-md text-[var(--color-text)] opacity-90">
//           I build scalable web applications with modern tools like React,
//           Node.js, MongoDB, and Tailwind. I love creating digital products that
//           solve real world problems.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex gap-4 mt-6 justify-center lg:justify-start">
//           <button className="px-6 py-3 rounded-md bg-[var(--color-primary)] text-white hover:opacity-90 transition">
//             Hire Me
//           </button>

//           <button className="px-6 py-3 rounded-md border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition">
//             Download Resume
//           </button>
//         </div>
//       </motion.div>

//       {/* Right Image Area */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative group"
//       >
//         <img
//           src="/UhaiMongProfilePicture.jpg"
//           className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-[var(--color-primary)]"
//         />

//         {/* Glow Effect */}
//         <div className="absolute inset-0 rounded-full ring-4 ring-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;
