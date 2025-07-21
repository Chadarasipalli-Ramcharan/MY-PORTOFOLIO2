import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { ChevronDown } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative min-h-screen w-full py-20 px-4 flex flex-col justify-start items-center bg-black text-white font-[Poppins,sans-serif] overflow-hidden"
    >
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background-certificates.mp4" type="video/mp4" />
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />

      {/* Title */}
      <motion.div
        className="z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold drop-shadow-xl text-white">
          My <span className="relative inline-block">
            <span className="text-purple-500 relative">
              Certificates
              <motion.div
                className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: 'center' }}
              />
            </span>
          </span>
        </h2>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {certificates.slice(0, 3).map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-5 rounded-[2rem] border-[2px] border-blue-500/50 backdrop-blur-md transition duration-500 hover:scale-[1.02] shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-purple-500/40 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-44 overflow-hidden rounded-xl mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
            <p className="text-sm text-white/60 mb-1">{cert.issuer}</p>
            <p className="text-xs text-white/40 mb-2">{cert.date}</p>
            <p className="text-sm text-white/70 mb-3 flex-grow">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-pink-400 text-sm font-medium"
            >
              View Certificate <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Certificates Button */}
      <motion.div
        className="z-10 text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://www.linkedin.com/in/chadarasipalli-ramcharan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          View All Certificates <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-4 z-10 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          const next = document.getElementById("gallery");
          if (next) next.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
