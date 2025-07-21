import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import logo from "@/assets/mylogo/1.jpg"; // ✅ Make sure your logo path is valid
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden font-[Poppins,sans-serif] px-4">
      
      {/* 🎥 Nebula Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* 🌌 Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />

      {/* 🚀 Main Card */}
      <motion.div
        className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 max-w-xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔥 Logo and Name */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full border-2 border-blue-500" />
          <h1 className="text-5xl font-bold">
            <span className="text-blue-400">RAM</span>CHARAN
          </h1>
        </div>

        {/* ⚠️ Alert + Text */}
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-10 w-10 text-yellow-400" />
        </div>
        <h2 className="text-4xl font-extrabold mb-2 text-white">404 - Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Looks like you’re lost in space. This page doesn’t exist.
        </p>

        {/* 🔁 Go Back Button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-pink-500 transition-all rounded-full font-medium text-white"
        >
          🚀 Take Me Home
        </button>
      </motion.div>
    </section>
  );
}
