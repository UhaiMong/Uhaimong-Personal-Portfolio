import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";

const servicesData = [
  {
    title: "Web Development",
    desc: "Building responsive and dynamic websites using React, Node.js, and modern tools.",
    icon: <FaLaptopCode size={40} color="#5a61ff" />,
  },
  {
    title: "Mobile Friendly Design",
    desc: "Creating mobile-first designs and responsive layouts that work on all devices.",
    icon: <FaMobileAlt size={40} color="#5a61ff" />,
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean and attractive user interfaces with a focus on user experience.",
    icon: <FaPaintBrush size={40} color="#5a61ff" />,
  },
];

export default function Services() {
  return (
    <>
      {/* <Helmet>
        <title>Services</title>
        <meta name="description" content="Perfonal Portfolio Application" />
      </Helmet>
      ; */}
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="services"
      >
        <div className="w-11/12 mx-auto h-14 px-5 flex justify-between items-center border-b-2 border-indigo-500 text-3xl font-bold text-[var(--color-text)]">
          <h1>My Services</h1>
          <MdHomeRepairService />
        </div>
        <div className="w-11/12 px-6 lg:px-16 py-16 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--color-secondary-bg)] rounded-xl p-6 flex flex-col items-center text-center cursor-pointer shadow-lg border border-white/10 hover:border-[var(--color-primary)] hover:scale-105 transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm opacity-80">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
