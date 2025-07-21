import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, CalendarDays, BadgeCheck } from "lucide-react";

type LoginEntry = {
  id: string;
  name: string;
  role: string;
  timestamp: string;
  rating?: number;
};

const AdminLogins = () => {
  const [logins, setLogins] = useState<LoginEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("loginHistory");
    const ratings = localStorage.getItem("loginRatings");

    if (stored) {
      const parsed = JSON.parse(stored);
      const parsedRatings = ratings ? JSON.parse(ratings) : {};
      const merged = parsed.map((login: LoginEntry) => ({
        ...login,
        rating: parsedRatings[login.id] || null,
      }));
      setLogins(merged);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-6 text-white relative font-[Poppins,sans-serif] overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-purple-600 opacity-20 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px] rounded-full z-0 animate-pulse" />

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16 z-10 relative drop-shadow-lg tracking-wide"
      >
        <BadgeCheck className="inline-block w-8 h-8 mr-2 text-blue-400 drop-shadow" />
        Login History
      </motion.h1>

      {logins.length === 0 ? (
        <p className="text-center text-gray-300 text-lg z-10 relative">No login records found.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-10 z-10 relative">
          {logins.map((login, index) => (
            <motion.div
              key={login.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start gap-6 bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-[0_0_40px_#3b82f6] hover:border-blue-500 transition-all duration-300"
            >
              <div className="space-y-3 w-full md:w-2/3">
                <p className="flex items-center gap-2 text-lg font-semibold text-white">
                  <User className="w-5 h-5 text-pink-400" />
                  <span className="text-white/90">Name:</span> {login.name}
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <BadgeCheck className="w-5 h-5 text-green-400" />
                  Role: {login.role}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-300">
                  <CalendarDays className="w-4 h-4" />
                  Logged in at: {new Date(login.timestamp).toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminLogins;
