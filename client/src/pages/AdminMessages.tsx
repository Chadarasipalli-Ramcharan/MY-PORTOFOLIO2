import React, { useEffect, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { Mailbox, User, CalendarDays, MessageCircle, AtSign } from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
};

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const stored = localStorage.getItem("messages");
        const data = stored ? JSON.parse(stored) : [];
        setMessages(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load messages.");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const markReadIfNeeded = async (msg: Message) => {
      if (!msg.read) {
        try {
          await apiRequest("PATCH", `/api/messages/${msg.id}`);
          setMessages((prev) =>
            prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m))
          );
        } catch (err) {
          console.error("Failed to mark as read:", err);
        }
      }
    };

    messages.forEach((msg) => {
      markReadIfNeeded(msg);
    });
  }, [messages]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl animate-pulse">
        Loading messages...
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center text-lg font-medium mt-10">
        {error}
      </p>
    );

  if (messages.length === 0)
    return (
      <p className="text-white text-center text-lg font-medium mt-10">
        No messages found.
      </p>
    );

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
        <Mailbox className="inline-block w-8 h-8 mr-2 text-pink-400 drop-shadow" />
        ADMIN - CONTACT MESSAGES
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-10 z-10 relative">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-[0_0_40px_#8b5cf6] hover:border-purple-500 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-lg font-semibold text-white">
                  <User className="w-5 h-5 text-pink-400" />
                  <span className="text-white/90">Name:</span> {msg.name}
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <AtSign className="w-5 h-5 text-blue-400" />
                  Email: {msg.email}
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <MessageCircle className="w-5 h-5 text-yellow-300" />
                  Subject: {msg.subject}
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-white/90">
                  <MessageCircle className="w-5 h-5 text-blue-300" />
                  <span className="font-semibold">Message:</span>
                </p>
                <p className="text-sm bg-white/5 p-4 rounded-xl text-white/90 border border-white/20">
                  {msg.message}
                </p>
                <p className="text-sm text-gray-300 flex items-center gap-2 mt-2">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(msg.date).toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminMessages;
