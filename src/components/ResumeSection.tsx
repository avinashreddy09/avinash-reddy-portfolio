import { Download, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ResumeSection = () => (
  <section id="resume" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <AnimatedSection>
        <div className="bg-card p-10 rounded-card shadow-smooth max-w-xl mx-auto">
          <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6 text-primary">
            <FileText size={32} />
          </div>
          <h2 className="text-3xl font-bold text-heading mb-3">My Resume</h2>
          <p className="text-body mb-8 text-pretty">
            Download my resume to learn more about my experience, skills, and education.
          </p>
          <a
            href="https://drive.google.com/file/d/1uXMfs541ulHsfrRj2YeMVcN0KMdalHh2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.98] text-lg"
          >
            <Download size={20} /> Download My Resume (PDF)
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ResumeSection;
