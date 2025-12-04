import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export default function Contact() {
  return (
    <>
      {/* <Helmet>
        <title>Contact</title>
        <meta name="description" content="Perfonal Portfolio Application" />
      </Helmet> */}
      <section id="contact">
        <div className="w-11/12 mx-auto h-14 px-5 flex justify-between items-center border-b-2 border-indigo-500 text-3xl font-bold text-[var(--color-text)]">
          <h1>Get In Touch</h1>
          <MdContactPhone />
        </div>
        <div className="min-h-screen px-6 lg:px-16 py-16 flex flex-col items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[var(--color-secondary-bg)] p-4 rounded-xl shadow-lg border border-white/10 hover:border-[var(--color-primary)] transition"
              >
                <FaEnvelope size={24} color="#5a61ff" />
                <a href="mailto:uhaimong.me@gmail.com">uhaimong.me@gmail.com</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[var(--color-secondary-bg)] p-4 rounded-xl shadow-lg border border-white/10 hover:border-[var(--color-primary)] transition"
              >
                <FaPhone size={24} color="#5a61ff" />
                <a href="tel:+8801516341885">+8801516341885</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[var(--color-secondary-bg)] p-4 rounded-xl shadow-lg border border-white/10 hover:border-[var(--color-primary)] transition"
              >
                <FaMapMarkerAlt size={24} color="#5a61ff" />
                <span>Dhaka, Bangladesh</span>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-4"
              >
                <a
                  href="https://github.com/uhai"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/uhai"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://instagram.com/uhai"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  <FaInstagram size={28} />
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 bg-[var(--color-secondary-bg)] p-6 rounded-xl shadow-lg border border-white/10"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-[var(--color-primary-bg)] text-white border border-white/20 focus:border-[var(--color-primary)] outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-[var(--color-primary-bg)] text-white border border-white/20 focus:border-[var(--color-primary)] outline-none transition"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded bg-[var(--color-primary-bg)] text-white border border-white/20 focus:border-[var(--color-primary)] outline-none transition"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[var(--color-primary)] rounded text-white hover:opacity-90 transition"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
