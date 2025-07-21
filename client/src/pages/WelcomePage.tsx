import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../assets/mylogo/1.jpg";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [booting, setBooting] = useState(false);

  const [authorizedOwners, setAuthorizedOwners] = useState<string[]>([]);

useEffect(() => {
  const saved = localStorage.getItem("authorizedAdmins");
  if (saved) {
    setAuthorizedOwners(JSON.parse(saved));
  } else {
    setAuthorizedOwners(["Ramcharan", "Admin"]);
  }
}, []);


  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 2000);
    const timer2 = setTimeout(() => setShowInput(true), 4500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

 const handleEnter = () => {
  if (userName.trim() && selectedRole) {
    if (selectedRole === "Administrator") {
      if (!authorizedOwners.includes(userName) || password !== "102030") {
        alert("Unauthorized Administrator or Incorrect Password");
        return;
      }
      localStorage.setItem("isAdmin", "true");
    } else {
      localStorage.setItem("isAdmin", "false");
    }

    // Store role + name
    localStorage.setItem("role", selectedRole);
    localStorage.setItem("userName", userName);

    // ✅ Add to login history
    const loginEntry = {
      id: Date.now().toString(),
      name: userName,
      role: selectedRole,
      timestamp: new Date().toISOString(),
    };
    const existingHistory = JSON.parse(localStorage.getItem("loginHistory") || "[]");
    const updatedHistory = [...existingHistory, loginEntry];
    localStorage.setItem("loginHistory", JSON.stringify(updatedHistory));

    setBooting(true);
    setTimeout(() => {
      navigate("/home");
    }, 4500);
  }
};




  const portfolioText = "ortfolio";

  return (
    <div className="relative h-screen w-full font-[Poppins,sans-serif] bg-black overflow-hidden flex">
      {/* Nebula Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 opacity-10 blur-2xl rounded-full z-0 animate-pulse-slow" />

      {/* Left Text Animation */}
      <motion.div
        className="w-1/2 h-full flex items-center justify-center ml-10"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {showText && (
          <motion.div
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white flex flex-col gap-3 text-left px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-[2px] items-center">
              <motion.span
                className="text-blue-500"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                W
              </motion.span>
              {"elcome to".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-[2px] items-center">
              <motion.span
                className="text-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                My P
              </motion.span>
              {portfolioText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-blue-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + 0.1 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Right Input Panel */}
      <div className="w-1/2 h-full flex items-center justify-left pr-10 relative">
        {booting ? (
          <motion.div
  className="relative z-10 p-5 text-left text-sm md:text-base font-mono w-[420px] rounded-3xl border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.7)] bg-white/5 backdrop-blur-2xl animate-fade-up transition duration-500"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Animated Glow Border */}
  <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-10 animate-pulse pointer-events-none z-[-1]" />

  <motion.p
    className="mb-2 text-green-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <span className="text-green-400 animate-pulse">[✓]</span> Initializing Portofolio...
  </motion.p>

  <motion.p
    className="mb-2 text-yellow-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <span className="text-yellow-300 animate-pulse">[✓]</span> Authenticating user identity...
  </motion.p>

  <motion.p
    className="mb-2 text-blue-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
  >
    <span className="text-blue-400 animate-pulse">[✓]</span> Loading neural modules...
  </motion.p>

  <motion.p
    className="mt-4 text-white font-semibold text-lg tracking-wide"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3 }}
  >
    Welcome to the Digital Showcase of{" "}
    <motion.span
      className="text-blue-400 font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.4 }}
    >
      CHADARASIPALLI RAMCHARAN...
    </motion.span>
    <span className="ml-1 animate-pulse">|</span>
  </motion.p>
</motion.div>


        ) : (
          showInput && (
            <motion.div
              className="z-10 bg-white/10 backdrop-blur-2xl rounded-3xl p-6 text-center text-white border-4 border-purple-600 w-[340px] shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-purple-600 mx-auto mb-3 shadow-lg"
              />

              <h3 className="text-base font-semibold mb-2">
                Enter your name to access or view
              </h3>

              <input
                type="text"
                placeholder="e.g. Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg text-black bg-white/80 mb-4 placeholder:text-gray-500"
              />

              {selectedRole === "Administrator" && authorizedOwners.includes(userName) && (
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 text-sm rounded-lg text-black bg-white/80 placeholder:text-gray-500"
                  />
                  <span
                    className="absolute top-2 right-3 cursor-pointer text-gray-700"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mb-4">
                {["Administrator", "Recruiter", "Friend", "Viewer"].map((role, i) => (
                  <motion.button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`text-sm px-3 py-2 rounded-xl border ${
                      selectedRole === role
                        ? "bg-purple-500 text-white"
                        : "bg-white/10 text-white border-white/20"
                    } backdrop-blur-md hover:bg-purple-500 transition`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  >
                    {role}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={handleEnter}
                disabled={
                  !userName.trim() ||
                  !selectedRole ||
                  (selectedRole === "Administrator" &&
                    (!authorizedOwners.includes(userName) || password !== "102030"))
                }
                className={`w-full py-2 text-sm rounded-xl font-semibold shadow-md transition ${
                  userName.trim() &&
                  selectedRole &&
                  (selectedRole !== "Administrator" ||
                    (authorizedOwners.includes(userName) && password === "102030"))
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:scale-105"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Continue →
              </motion.button>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
