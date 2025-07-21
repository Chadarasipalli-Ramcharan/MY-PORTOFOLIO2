import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { ChevronDown } from "lucide-react";

const smoothScrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-start items-center bg-black text-white px-4 pt-20 pb-20 font-[Poppins,sans-serif] overflow-hidden"
    >
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
      >
        <source src="/background-skills.mp4" type="video/mp4" />
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 opacity-10 blur-2xl rounded-full z-0 animate-pulse-slow" />

      {/* Section Title */}
      <motion.div
        className="z-10 text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold drop-shadow-xl flex justify-center items-center gap-4 text-center">
          <span className="text-white">My</span>
          <span className="text-blue-500 relative inline-block">
            Skills
            <motion.div
              className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </h2>
      </motion.div>

      {/* Responsive Layout */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-6 md:grid md:grid-cols-5 md:grid-rows-6 md:gap-4">
        
        {/* Languages */}
        <motion.div
          className="w-full bg-white/10 p-5 rounded-[2rem] border-[6px] border-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-pink-500/40 md:col-span-2 md:row-span-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-pink-400 text-xl font-semibold mb-4">Languages</h3>
          <div className="space-y-4">
            {[...skills.languages,
              { name: "Python", level: "Advanced", percentage: 90 },
              { name: "TypeScript", level: "Intermediate", percentage: 75 },
              { name: "C++", level: "Intermediate", percentage: 70 },
            ].map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-white/60">{lang.level}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="w-full bg-white/10 p-5 rounded-[2rem] border-[6px] border-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-purple-500/50 md:col-span-3 md:row-span-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-purple-400 text-xl font-semibold mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {skills.interests.map((interest, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 bg-white/10 rounded-full border border-white/10"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          className="w-full bg-white/10 p-5 rounded-[2rem] border-[6px] border-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-green-500/50 md:col-span-1 md:row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-green-400 text-xl font-semibold mb-3">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'Express.js'].map((fw, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 bg-white/10 rounded-full border border-white/10"
              >
                {fw}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          className="w-full bg-white/10 p-5 rounded-[2rem] border-[6px] border-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/50 md:col-span-2 md:row-span-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-cyan-400 text-xl font-semibold mb-3">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {[...skills.platforms, ...skills.tools].map((item, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 bg-white/10 rounded-full border border-white/10 flex items-center gap-2"
              >
                <i className={`${item.icon} text-white/60`} />
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="w-full bg-white/10 p-5 rounded-[2rem] border-[6px] border-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-blue-500/50 md:col-span-3 md:row-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-blue-400 text-xl font-semibold mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Communication", "Teamwork", "Problem Solving", "Creativity", "Adaptability", "Time Management"].map((skill, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 bg-white/10 rounded-full border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Projects Button */}
      <motion.div
        className="absolute bottom-4 z-10 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => smoothScrollTo("projects")}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
