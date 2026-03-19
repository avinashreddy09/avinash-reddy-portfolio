import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { icon: "🏆", label: "Top 1.5%", sub: "Young Turks" },
  { icon: "🚀", label: "200+ Users", sub: "Automation Tool" },
  { icon: "⚡", label: "80%", sub: "Effort Reduction" },
  { icon: "🧠", label: "150+", sub: "LeetCode Problems" },
];

const TypeWriter = ({ text, highlight }: { text: string; highlight: string }) => {
  const parts = text.split(highlight);
  return (
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold tracking-tight text-heading text-balance"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {parts[0]}
      <motion.span
        className="text-primary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {highlight}
      </motion.span>
      {parts[1] || ""}
    </motion.h1>
  );
};

const HeroSection = () => {
  // Add timestamp to force image reload (cache busting)
  const imageTimestamp = Date.now();
  
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              👋 Hello! I'm
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-6 mb-6">
              {/* LARGER PROFILE PHOTO - UPDATED SIZE */}
              <motion.div
                className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto md:mx-0 flex-shrink-0"
                style={{ 
                  width: "256px", 
                  height: "256px",
                  minWidth: "256px",
                  minHeight: "256px"
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <img
                  src={`${profilePhoto}?t=${imageTimestamp}`}
                  alt="Avinash Reddy"
                  className="w-full h-full object-cover scale-110"
                  onLoad={() => console.log("Photo loaded with size:", "256x256")}
                />
              </motion.div>
              <div className="text-center md:text-left">
                <TypeWriter text="Avinash Reddy" highlight="Reddy" />
                <motion.p
                  className="mt-2 text-xl font-semibold text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  Software Developer
                </motion.p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body max-w-2xl mx-auto text-lg leading-relaxed text-pretty mb-8">
              Software developer specializing in intelligent systems, automation tools, and full-stack
              applications that integrate machine learning and data-driven insights to solve practical
              real-world problems. Recognized in the top 1.5% nationally for analytical excellence
              (Young Turks Skill Assessment). Built automation tools adopted by 200+ users and
              real-time fraud detection systems.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.98]"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all active:scale-[0.98]"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center gap-5 mb-12">
              <a href="https://github.com/avinashreddy09" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/avinashreddy09/" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:avinashreddydonthireddy2006@gmail.com" className="text-body hover:text-primary transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums mt-1">{s.label}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <button
            onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce text-primary mt-8"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;