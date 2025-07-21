import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa6";
import { useTheme } from "@/components/ThemeProvider";
import { smoothScrollTo } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/mylogo/1.jpg"; 


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certificates" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [inHero, setInHero] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      const heroSection = document.getElementById("home");
      const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;
      setInHero(heroBottom > 80); // if still in Hero

      if (heroBottom <= 80) {
        const goingUp = currentScrollY < lastScrollY.current;
        if (goingUp) setShowNav(true);       // ✅ show on scroll up
        else setShowNav(false);              // ❌ hide on scroll down
      } else {
        setShowNav(true); // always show in Hero
      }

      lastScrollY.current = currentScrollY;

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((currentScrollY / docH) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)!);
    const opts = { rootMargin: "-50% 0px -50% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(`#${e.target.id}`);
      });
    }, opts);
    sections.forEach((sec) => sec && io.observe(sec));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    smoothScrollTo(href.substring(1));
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[5px] z-[60] bg-gradient-to-r from-primary-500 via-pink-500 to-purple-500 animate-pulse shadow-md"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "shadow-2xl scale-[1.01]" : ""
        }`}
      >
        <div className="bg-[#0a0f2c] shadow-md border-b border-primary-500">
          <div className="max-w-[1600px] mx-auto px-6 py-5 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
  <img
    src={profileImg}
    alt="Profile"
    className="w-14 h-12 rounded-full border-2 border-purple-600 object-cover shadow-lg"
    
  />
  <Link
    to="/home"
    className="text-3xl font-black tracking-wide text-white hover:scale-110 duration-300"
  >
    <span className="text-primary-500 drop-shadow-lg">MY-</span>
    <span className="text-white">PORTFOLIO</span>
  </Link>
</div>


            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10 ml-auto">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative text-lg text-white font-medium transition duration-300 hover:scale-110 hover:text-primary-500 ${
                      isActive ? "text-primary-500 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary-500 rounded-full transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:flex items-center ml-8">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/10 text-white hover:scale-110 hover:bg-white/20 transition-all duration-300 shadow-inner"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white text-2xl p-2"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
     <AnimatePresence>
  {mobileMenuOpen && (
    <>
      {/* 🔲 Blurred Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* 📱 Slide-in Panel (Mobile Navbar - Half screen) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] right-0 w-1/2 h-[calc(100vh-72px)] z-50 p-4 bg-gradient-to-b from-[#1f2937] to-[#111827] border-l-4 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.3)] rounded-l-3xl backdrop-blur-xl"
      >
        <div className="flex flex-col gap-5 text-white font-semibold">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="px-2 py-1 rounded-lg transition-all hover:bg-white/10 hover:text-primary-400 border-l-2 border-transparent hover:border-primary-400"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Divider */}
          <div className="mt-3 pt-3 border-t border-white/10" />

          {/* 🌗 Theme Toggle Button */}
          <div className="flex justify-start">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 shadow-inner transition-all duration-300"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>




      </motion.header>
    </>
  );
}

