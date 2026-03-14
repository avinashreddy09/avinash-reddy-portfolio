import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { icon: "🏆", label: "Top 1.5%", sub: "Young Turks" },
  { icon: "🚀", label: "200+ Users", sub: "Automation Tool" },
  { icon: "⚡", label: "80%", sub: "Effort Reduction" },
  { icon: "🧠", label: "150+", sub: "LeetCode Problems" },
];

const HeroSection = () => (
  <section id="about" className="min-h-screen flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center">
        <AnimatedSection>
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            👋 Hello! I'm
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src={profilePhoto}
              alt="Avinash Reddy"
              className="w-[120px] h-[120px] rounded-full object-cover shadow-smooth ring-4 ring-background"
            />
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-heading text-balance">
                Avinash <span className="text-primary">Reddy</span>
              </h1>
              <p className="mt-2 text-xl font-semibold text-primary">Software Engineer</p>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.98]"
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
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card p-4 rounded-card shadow-smooth hover:border-primary/20 border border-transparent transition-colors text-center"
              >
                <span className="text-2xl">{s.icon}</span>
                <p className="text-lg font-bold text-heading tabular-nums mt-1">{s.label}</p>
                <p className="text-xs text-body">{s.sub}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <button
          onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce text-primary"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
