// AdminPanel.tsx (Final Fixed Version with Accurate Role Check)
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cog, LockKeyhole, Code2, LogOut, Users,
  ShieldCheck, Mailbox, Home, Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showAccessPanel, setShowAccessPanel] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authorizedAdmins, setAuthorizedAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = () => {
      const admin = localStorage.getItem("isAdmin");
      const role = localStorage.getItem("role");
      const savedAdmins = JSON.parse(localStorage.getItem("authorizedAdmins") || '["Ramcharan", "Admin"]');
      setIsAdmin(admin === "true" && role === "Administrator");
      setDeveloperMode(localStorage.getItem("developerMode") === "true");
      setAuthorizedAdmins(savedAdmins);
    };

    loadData();
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("developerMode", "false");
    localStorage.removeItem("role");
    setIsAdmin(false);
    navigate("/");
  };

  const handleGrantAccess = () => {
    const trimmed = newAdmin.trim();
    if (!trimmed || authorizedAdmins.includes(trimmed)) return;
    const updated = [...authorizedAdmins, trimmed];
    localStorage.setItem("authorizedAdmins", JSON.stringify(updated));
    setAuthorizedAdmins(updated);
    setNewAdmin("");
  };

  const handleRemoveAdmin = (name: string) => {
    const updated = authorizedAdmins.filter((admin) => admin !== name);
    localStorage.setItem("authorizedAdmins", JSON.stringify(updated));
    setAuthorizedAdmins(updated);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowAccessPanel(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!isAdmin) return null;

  return (
    <div className="relative z-50">
      <button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-20 right-6 md:bottom-10 md:right-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-xl hover:rotate-180 transition-transform duration-500"
>
  <Cog className="w-8 h-8 md:w-10 md:h-10 animate-spin-slow" />
</button>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4 }}
className="fixed bottom-28 right-8 md:right-32 w-[85vw] max-w-[88vw] md:max-w-sm p-3 md:p-5 rounded-2xl md:rounded-3xl  bg-[#0f172a]/80 border-4 border-purple-500 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.6)] md:shadow-[0_0_80px_rgba(168,85,247,0.6)]"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-center gap-2">
              <LockKeyhole className="text-purple-400 w-5 h-5" /> Admin Control Panel
            </h3>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => setShowAccessPanel(!showAccessPanel)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-purple-600/30 text-white shadow-lg border border-purple-500"
              >
                <Users className="w-5 h-5 text-purple-300" />
                <span className="text-sm font-medium">Manage Access</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate("/admin/logins")}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-blue-600/30 text-white shadow-lg border border-blue-500"
              >
                <Code2 className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">View Login Details</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-yellow-600/30 text-white shadow-lg border border-yellow-500"
              >
                <ShieldCheck className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Edit Content Details</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate("/admin/messages")}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-green-600/30 text-white shadow-lg border border-green-500"
              >
                <Mailbox className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">View Contact Messages</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate("/home")}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-cyan-600/30 text-white shadow-lg border border-violet-500"
              >
                <Home className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">Back to Home</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-red-600/30 text-white shadow-lg border border-red-500"
              >
                <LogOut className="w-5 h-5 text-red-300" />
                <span className="text-sm font-medium">Logout Administrator</span>
              </motion.button>
            </div>

            <AnimatePresence>
              {showAccessPanel && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-5 rounded-2xl border-2 border-purple-500 bg-white/5 text-white"
                >
                  <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Manage Administrators
                  </h4>

                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={newAdmin}
                      onChange={(e) => setNewAdmin(e.target.value)}
                      placeholder="Enter new admin name"
                      className="w-full px-3 py-2 rounded-lg text-black bg-white/90 text-sm"
                    />
                    <button
                      onClick={handleGrantAccess}
                      className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700"
                    >
                      Grant
                    </button>
                  </div>

                  <ul className="space-y-2 text-sm">
                    {authorizedAdmins.map((admin, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center px-3 py-1 bg-white/10 rounded-lg"
                      >
                        <span>{admin}</span>
                        <button onClick={() => handleRemoveAdmin(admin)} className="text-red-300 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
