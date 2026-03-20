import { Code, Globe, Wrench, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const categories = [
  { icon: <Code size={24} />, title: "Languages", skills: ["C", "C++", "Python","Java"] },
  { icon: <Globe size={24} />, title: "Web Technologies", skills: ["HTML", "CSS", "JavaScript","Tailwind CSS"] },
  { icon: <Wrench size={24} />, title: "Tools & Platforms", skills: ["Git", "GitHub", "Linux", "LeetCode","VS Code"] },
  { icon: <Users size={24} />, title: "Soft Skills", skills: ["Problem Solving", "Team Collaboration", "Time Management","Adaptability","Project Management"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="bg-card p-6 rounded-card shadow-smooth h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="text-primary mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-heading mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
