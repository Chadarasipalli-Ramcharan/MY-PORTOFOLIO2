import { smoothScrollTo } from "@/lib/utils";
import { motion } from "framer-motion";
import logo from "@/assets/mylogo/1.jpg"; // ✅ Ensure this image path is correct

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/ramcharan" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ramcharan" },
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/ramcharan" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/ramcharan" },
    { name: "Notion", icon: "far fa-sticky-note", url: "https://notion.io/ramcharan" },
  ];

  return (
    <footer className="relative z-10 w-full overflow-hidden pt-16 px-6 md:px-10 bg-black text-white">
      {/* Nebula Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Left Side - Logo & Info */}
          <div className="flex items-center space-x-5 text-left">
            <img
              src={logo}
              alt="Logo"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-600 mx-auto mb-3 shadow-lg"
            />
            <div className="-mt-5">
              <div className="text-2xl md:text-2xl font-bold text-white">
                <span className="text-blue-500">CHADARASIPALLI </span>RAMCHARAN
                <span className="text-blue-400 animate-pulse">☑️</span>
              </div>
              <p className="text-1xl font-bold text-gray-400 max-w-xl text-sm md:text-base">
                HE/HIM<br />Web Developer & AI Enthusiast | B.Tech CSE @ SPSU |<br /> Leading Through Sport, Growing Through Code |
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-white transition-all duration-300 text-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>

          {/* Right Side - Copyright */}
          <div className="hidden md:block text-gray-300 text-sm tracking-wider mt-8 ml-auto pr-2">
  &copy; {currentYear} <span className="text-white font-bold">Chadarasipalli RamCharan</span>. All rights reserved.
</div>

        </div>
      </motion.div>
    </footer>
  );
}
