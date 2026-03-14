import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import projectBooks from "@/assets/project-books.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectFraud from "@/assets/project-fraud.jpg";
import projectPlagiarism from "@/assets/project-plagiarism.jpg";

const projects = [
  {
    title: "Book Lovers Social Networking Platform",
    description: "Responsive web platform enabling users to explore, share, and discover books with intuitive navigation and clean UI. Built interactive pages for browsing and viewing book details.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: projectBooks,
    github: "https://github.com/avinashreddy09/website-for-book-lovers-",
    demo: "https://bookworm-ai.vercel.app/",
  },
  {
    title: "Naukri Job Application Automation",
    description: "Automated job application system using Python and Selenium with intelligent form handling and duplicate detection. Adopted by 200+ users, reducing manual effort by 80%.",
    tags: ["Python", "Selenium", "Web Automation"],
    image: projectAutomation,
    github: "https://github.com/avinashreddy09/naukari-job-automation",
  },
  {
    title: "Credit Card Fraud Detection System",
    description: "Real-time fraud detection web app using Streamlit and LightGBM. Integrated geodesic distance calculation for location-based anomaly detection. Supports CSV batch analysis and manual input.",
    tags: ["Python", "Streamlit", "LightGBM", "scikit-learn", "geopy"],
    image: projectFraud,
    github: "https://github.com/avinashreddy09/Fraud_Detection_System/",
    demo: "https://fraud-detection-system-gwks.onrender.com/",
  },
  {
    title: "Plagiarism Detection Tool",
    description: "Plagiarism detection system using Python with AST parsing and tokenization to analyze code structure rather than surface text. Applied Levenshtein Distance for accurate similarity matching.",
    tags: ["Python", "Flask", "AST Parsing", "Levenshtein Distance"],
    image: projectPlagiarism,
    github: "https://github.com/avinashreddy09/Plagiarism-Detection-Tool-for-Code-Submissions",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="group bg-card rounded-card shadow-smooth overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-2">{p.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-4 text-pretty">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
