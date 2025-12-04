import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Predefined Q&A
export const qaData = [
  // Personal Info
  {
    prompt: "Hi",
    answer: "Hello",
  },
  {
    prompt: "Hello",
    answer: "Hi, How are you?",
  },
  {
    prompt: "Who are you?",
    answer:
      "I am Uhai Mong Marma, a passionate Full Stack Web Developer specialist on MERN",
  },
  {
    prompt: "how are you?",
    answer: "I'm Fine. Thank you. How about you?",
  },
  {
    prompt: "Fine",
    answer: "Nice to hear. Nice to meet you.",
  },
  {
    prompt: "Bad, not good",
    answer: "Ah! Sorry for your bad.",
  },
  {
    prompt: "Nice to meet you too",
    answer: "Great! Ask me anythin about me.",
  },
  {
    prompt: "Nice to meet you",
    answer: "Nice to meet you too.",
  },
  {
    prompt: "Tell me about yourself",
    answer:
      "I am Uhai Mong Marma, a Full Stack Web Developer with experience in React, Node.js, MongoDB, and modern web technologies. I love building interactive and high-performance web applications.",
  },
  {
    prompt: "Where are you from?",
    answer:
      "My Home Town is Bandarban. It's under the Chattogram Division of Bangladesh",
  },
  {
    prompt: "What is your profession?",
    answer: "I am a Full Stack Web Developer. Specialist on MERN.",
  },

  // Skills
  {
    prompt: "What technologies do you know?",
    answer:
      "I specialize in React, Node.js, MongoDB, Tailwind CSS, JavaScript, HTML5, CSS3, and modern web development tools.",
  },
  {
    prompt: "Which programming languages do you know?",
    answer:
      "I am proficient in JavaScript, HTML, CSS, and have experience with modern frameworks like React and Node.js.",
  },
  {
    prompt: "Do you know React?",
    answer:
      "Yes! React is my primary frontend framework. I build responsive and dynamic web applications using React.",
  },
  {
    prompt: "Do you know Node.js?",
    answer:
      "Yes! I use Node.js to build backend APIs and server-side applications.",
  },

  // Experience
  {
    prompt: "What is your experience?",
    answer:
      "I have worked as a Freelance Web Developer building real projects and as a Junior Sales Executive at UCB PLC handling customer relations and technical sales.",
  },
  {
    prompt: "Where have you worked?",
    answer:
      "I have freelanced on platforms like Fiverr and Upwork, and Fresh graduated from Bandarban University of BSc in CSE.",
  },
  {
    prompt: "How long have you been coding?",
    answer: "I have been coding for over 4 years, since my university days.",
  },

  // Projects
  {
    prompt: "What projects have you done?",
    answer:
      "I have built personal portfolio websites, real-time chat apps, resume builders, QR code generators, and blog websites using the MERN stack.",
  },
  {
    prompt: "Can I see your projects?",
    answer:
      "Yes! You can check my projects in the Projects section of this portfolio.",
  },

  // Education
  {
    prompt: "What is your education?",
    answer:
      "I have a B.Sc. in Computer Science and Engineering and completed a 6-months Web development course at Programming Hero.",
  },
  {
    prompt: "Where did you study?",
    answer:
      "I studied Computer Science & Engineering at my university and also completed a Web development course at Programming Hero.",
  },

  // Resume
  {
    prompt: "Can I download your resume?",
    answer:
      "Yes! You can download my resume directly from the Resume section of this portfolio.",
  },

  // Contact
  {
    prompt: "How can I contact you?",
    answer:
      "You can contact me through the Contact section of this portfolio, or via email at uhaimong.me@gmail.com and phone +8801516341885",
  },
  {
    prompt: "Do you have social profiles?",
    answer:
      "Yes! You can find me on GitHub, LinkedIn, and Instagram. Links are in the Contact section.",
  },

  // Misc / Fun
  {
    prompt: "What are your hobbies?",
    answer:
      "I enjoy coding, learning new web technologies, building projects, and exploring trend tech tools.",
  },
  {
    prompt: "What is your goal?",
    answer:
      "My goal is to become a highly skilled Full Stack Web Developer and secure high-paying opportunities while continuously improving my skills.",
  },
];

// Default response for irrelevant questions
const defaultAnswer =
  "I can reply only relevant questions about me. Please ask me something relevant.";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! Ask me anything about me 🙂" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: "user", text: input }]);

    // Find answer
    const qa = qaData.find(
      (q) => q.prompt.toLowerCase() === input.trim().toLowerCase()
    );
    const answer = qa ? qa.answer : defaultAnswer;

    // Add bot response after a small delay for smooth effect
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: answer }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* <Helmet>
        <title>Chat Bot</title>
        <meta name="description" content="Perfonal Portfolio Application" />
      </Helmet> */}
      <section className="w-10/12  px-6 lg:px-16 py-16 flex flex-col items-center text-white">
        <h2 className="text-4xl font-bold mb-12 science-font">I'm Bot🤖</h2>

        <div className="w-full bg-[var(--color-secondary-bg)] rounded-xl shadow-lg border border-white/10 p-4 flex flex-col justify-between gap-4">
          {/* Messages */}
          <div className="flex flex-col gap-3 max-h-96 overflow-y-auto mb-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.type === "bot" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.type === "bot"
                    ? "bg-[var(--color-primary)]/20 self-start"
                    : "bg-[var(--color-primary)] self-end"
                }`}
              >
                {msg.type === "bot" ? (
                  <Typewriter
                    options={{ delay: 25 }}
                    onInit={(typewriter) => {
                      typewriter.typeString(msg.text).start();
                    }}
                  />
                ) : (
                  msg.text
                )}
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 p-3 rounded bg-[var(--color-primary-bg)] text-white border border-white/20 focus:border-[var(--color-primary)] outline-none transition"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-[var(--color-primary)] rounded hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
