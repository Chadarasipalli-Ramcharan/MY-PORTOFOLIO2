import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "@/assets/Profile/15.jpg"; // replace with your image path
import { smoothScrollTo } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden font-[Poppins,sans-serif]"
    >
      {/* Nebula Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glow orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600 opacity-40 blur-3xl rounded-full z-0 animate-ping" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />

      {/* Content */}
      <div className="container relative z-10 px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl gap-12">
        {/* Left Text */}
        <div className="text-left max-w-xl">
          <motion.h2
            className="text-2xl font-bold text-pink-300 mb-2 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             Hello, it's me
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            CHADARASIPALLI RAMCHARAN
          </motion.h1>

          <motion.h3
            className="text-xl md:text-2xl text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            And I'm a{" "}
            <TypeAnimation
              sequence={[
                "AI & ML Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-blue-500 font-bold"
            />
          </motion.h3>

          <motion.p
            className="mt-6 text-gray-300 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
              Passionate about creating intelligent, scalable, and elegant digital solutions.
Skilled in blending technology with thoughtful design and performance.
Driven by curiosity, creativity, and a commitment to continuous improvement.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button
              onClick={() => smoothScrollTo("projects")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition"
            >
              💡View Projects
            </button>
            <button
              onClick={() => smoothScrollTo("contact")}
              className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              📞Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-80 h-80 md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-xl border-4 border-blue-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={profileImage}
            alt="Your Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Swipe Down Icon */}
      <motion.div
        className="absolute bottom-6 z-10 cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => smoothScrollTo("about")}
      >
        <svg
          className="w-8 h-8 text-blue-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
