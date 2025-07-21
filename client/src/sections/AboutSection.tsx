import { motion } from "framer-motion";
import profileImage from "@/assets/Profile/13.jpg";
import { ChevronDown } from "lucide-react";

// ✅ Add this function at the top
const smoothScrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-start text-white overflow-hidden font-[Poppins,sans-serif] pt-24 px-6 bg-black"
    >
      {/* Unique Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
      >
        <source src="background-about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 opacity-10 blur-2xl rounded-full z-0 animate-pulse-slow" />

      {/* Section Heading */}
      <motion.div
        className="text-5xl font-extrabold text-center z-10 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <h2 className="text-5xl font-extrabold drop-shadow-xl">
        <span className="text-blue-500 relative inline-block">
            About 
            <motion.div
              className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <span className="text-white"> Me</span>
          
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl gap-12">
        {/* Left: Profile Image */}
        <motion.div
          className="w-[360px] h-[360px] md:w-[360px] md:h-[400px] md:ml-12 rounded-3xl overflow-hidden border-[4px] border-purple-500 shadow-2xl hover:scale-105 transition duration-700 hover:shadow-purple-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Ramcharan Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          className="max-w-2xl text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-pink-400 mb-4">
            I’M CHADARASIPALLI RAMCHARAN
          </h3>

          <motion.p
            className="text-lg text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Currently a 3rd year B.Tech student at SPSU Udaipur, specializing in Artificial Intelligence and Machine Learning. I’m passionate about building intuitive, modern digital experiences across the full-stack.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond technology, I value discipline, focus, and continuous self-growth—believing in purpose-driven innovation that blends creativity with impact.
          </motion.p>

          {/* Quotation */}
          <motion.p
            className="italic text-base text-white/70 mb-6 border-l-4 border-purple-500 pl-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            “Crafting with code, guided by spirit — I believe purpose fuels innovation.”
          </motion.p>

          {/* Detail Boxes */}
          <div className="mt-2 flex flex-wrap gap-4">
            {[
              { icon: "🎓", text: "CSE @ SPSU" },
              { icon: "📍", text: "Udaipur, India" },
              { icon: "🤖", text: "AI/ML Focus" },
              { icon: "💻", text: "Full Stack Dev" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
              >
                {item.icon}{" "}
                <span className="font-medium text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/src/assets/RAM CHARAN.pdf"
            download="RAM CHARAN.pdf"
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Swipe Down Icon */}
      <motion.div
  className="absolute bottom-6 z-10 cursor-pointer"
  initial={{ y: 0 }}
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  onClick={() => smoothScrollTo("skills")}
>
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</motion.div>

    </section>
  );
}
