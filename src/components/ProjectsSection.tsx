import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "AI Resume Builder",
    description: "AI-powered resume builder with live templates, PDF extraction, drag-and-edit sections, and secure sharing.",
    points: [
      "Built full-stack MERN application with OpenAI API integration for AI-assisted resume content generation and enhancement",
      "Implemented multiple professional templates with drag-and-edit functionality, PDF extraction, and JWT authentication",
      
    ],
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS", "JWT"],
    github: "https://github.com/avinashreddy09/Ai-resume-builder",
    live: "https://jioresume.co/",
    imageSrc: "/certificates/ai-resume-builder.png",
    imageAlt: "AI Resume Builder Project Screenshot"
  },
  {
    title: "Naukri Job Application Automation",
    description: "Automated job application system using Python and Selenium with intelligent form handling and duplicate detection.",
    points: [
      "Developed automated job application system using Python and Selenium to streamline job searches and auto-application on Naukri",
      
      "Reduced manual application effort by over 80% through automated workflows, improving speed and scalability"
    ],
    tech: ["Python", "Selenium", "Web Automation"],
    github: "https://github.com/avinashreddy09/naukari-job-automation",
    live: null,
    imageSrc: "/certificates/naukri-automation.png",
    imageAlt: "Naukri Job Automation Project Screenshot"
  },
  {
    title: "Credit Card Fraud Detection System",
    description: "Real-time fraud detection web app using Streamlit and LightGBM with location-based anomaly detection.",
    points: [
      "Created real-time fraud detection web app using Streamlit and LightGBM to classify transactions as fraudulent or legitimate",
      "Integrated geodesic distance calculation using geopy to detect location-based anomalies between transactions",

    ],
    tech: ["Python", "Streamlit", "LightGBM", "scikit-learn", "geopy", "Render"],
    github: "https://github.com/avinashreddy09/Fraud_Detection_System",
    live: "https://fraud-detection-demo.vercel.app",
    imageSrc: "/certificates/fraud-detection.png",
    imageAlt: "Credit Card Fraud Detection Project Screenshot"
  },
  {
    title: "Plagiarism Detection Tool",
    description: "Plagiarism detection system using Python with AST parsing and tokenization for code structure analysis.",
    points: [
      "Engineered plagiarism detection system using Python with AST parsing and tokenization for code structure analysis",
      "Applied Levenshtein Distance and logical similarity matching to identify partial and complete code reuse",
   
    ],
    tech: ["Python", "Flask", "AST Parsing", "Levenshtein Distance"],
    github: "https://github.com/avinashreddy09/Plagiarism-Detection-Tool-for-Code-Submissions",
    live: "https://plagiarism-detection-tool.vercel.app/",
    imageSrc: "/certificates/plagiarism-detection.png",
    imageAlt: "Plagiarism Detection Tool Project Screenshot"
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.1}>
            <div className="bg-card rounded-card shadow-smooth overflow-hidden hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
              {/* Project Image */}
              {project.imageSrc ? (
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={project.imageSrc} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.fallback-image');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-image hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="text-center">
                      <Github size={48} className="text-primary/40 mx-auto" />
                      <p className="text-sm text-body mt-2">Project Preview</p>
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Github size={48} className="text-primary/40" />
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Project Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-heading leading-tight">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-body text-sm mb-3 leading-relaxed">{project.description}</p>
                
                {/* Key Points - Limited to first 2 for card layout */}
                <ul className="space-y-1.5 mb-4">
                  {project.points.slice(0, 2).map((point, i) => (
                    <li key={i} className="text-xs text-body/80 leading-relaxed pl-3 border-l-2 border-primary/30">
                      {point.length > 100 ? point.substring(0, 100) + "..." : point}
                    </li>
                  ))}
                </ul>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      +{project.tech.length - 4}
                    </span>
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
