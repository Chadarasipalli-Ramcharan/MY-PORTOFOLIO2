import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ChevronDown } from "lucide-react";


export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-20 px-4 flex flex-col justify-start items-center bg-black text-white font-[Poppins,sans-serif] overflow-hidden"
    >
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background-projects.mp4" type="video/mp4" />
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-500 opacity-10 blur-2xl rounded-full z-0 animate-pulse-slow" />

      {/* Title */}
      <motion.div
        className="z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold drop-shadow-xl text-white">
          My{" "}
          <span className="relative inline-block">
            <span className="text-blue-500 relative">
              Pro
              <motion.div
                className="absolute left-0 right-2 h-1 mt-1 bg-gradient-to-r from-pink-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <span className="text-blue-500 relative">j</span>
            <span className="text-blue-500 relative">
              ects
              <motion.div
                className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: "right" }}
              />
            </span>
          </span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-5 rounded-[2rem] border-[2px] border-blue-500/50 backdrop-blur-md transition duration-500 hover:scale-[1.02] shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-purple-500/40 flex flex-col"
            variants={itemVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <p className="text-white/70 text-sm mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex justify-between items-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Live Demo <i className="fas fa-arrow-right ml-1"></i>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/80 text-lg"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="z-10 text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://github.com/Chadarasipalli-Ramcharan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          View All Projects <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.div>

      {/* Swipe Down to Certificates Section */}
      <motion.div
        className="absolute bottom-4 z-10 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          const next = document.getElementById("certificates");
          if (next) next.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
