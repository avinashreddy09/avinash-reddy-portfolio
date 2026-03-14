import { Trophy, Code } from "lucide-react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const AchievementsSection = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Achievements" subtitle="Milestones and recognitions" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedSection>
          <div className="bg-card p-6 rounded-card shadow-smooth h-full hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-inner text-primary shrink-0">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading">Young Turks Skill Assessment</h3>
                <p className="text-2xl font-bold text-primary mt-1 tabular-nums">98.49 Percentile <span className="text-sm font-medium">(Top 1.5%)</span></p>
                <p className="text-sm text-body mt-1">Sep 2025</p>
                <p className="text-sm text-body mt-2 text-pretty">
                  Recognized for outstanding analytical thinking, quantitative reasoning, high-accuracy DSA problem solving, and aptitude excellence.
                </p>
                <a
                  href="https://drive.google.com/file/d/1Guka9CwT3qV-EbTt3e4EEC79CsBria-6/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Credential
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card p-6 rounded-card shadow-smooth h-full hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-inner text-primary shrink-0">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading">Competitive Programming</h3>
                <p className="text-2xl font-bold text-primary mt-1 tabular-nums">150+ Problems</p>
                <p className="text-sm text-body mt-2 text-pretty">
                  Solved 150+ LeetCode problems, primarily medium and hard difficulty, focusing on data structures, algorithms, and optimization techniques.
                </p>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Profile
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
