import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "PrismRAG — Multimodal Agentic RAG",
    description: "Multimodal agentic RAG system that embeds text, URLs, PDFs, images, audio, and video into one shared Gemini vector space with 3D visualization.",
    points: [
      "Architected a multimodal agentic RAG system embedding text, URLs, PDFs, images, audio, and video into one shared Gemini Embedding 2 vector space (768 dims)",
      "Integrated Google ADK agent with two tools (retrieve_relevant_context, inspect_embedding_space) for autonomous reasoning and grounded, cited answers",
      "Built a real-time 3D embedding visualization with Three.js, rendering each source as a colored point and query points in orange after each ask",
      "Deployed on Vercel with FastAPI backend, React frontend, SSRF protection, and configurable CORS — no external vector database"
    ],
    tech: ["Python", "FastAPI", "Gemini Embedding 2", "Gemini 3 Flash", "Google ADK", "React", "TypeScript", "Three.js", "Vercel"],
    github: "https://github.com/avinashreddy09/PrismRAG",
    live: "https://multimodal-rag-lovat.vercel.app",
    imageSrc: "/certificates/prismrag.png",
    imageAlt: "PrismRAG Multimodal Agentic RAG Project Screenshot"
  },
  {
    title: "AI Resume Builder",
    description: "AI-powered resume builder with live templates, PDF extraction, drag-and-edit sections, and secure sharing — used by 500+ real users.",
    points: [
      "Built full-stack MERN application with OpenAI API integration for AI-assisted resume content generation and enhancement",
      "Implemented multiple professional templates with drag-and-edit functionality, PDF extraction, and JWT authentication",
      "Integrated OpenAI GPT API for intelligent content enhancement, improving ATS compatibility scores by 25%",
      "Maintained 85% test coverage and 99.9% production uptime, raising form completion to 94%"
    ],
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS", "JWT", "Vercel"],
    github: "https://github.com/avinashreddy09/Ai-resume-builder",
    live: "https://jioresume.com/",
    imageSrc: "/certificates/ai-resume-builder.png",
    imageAlt: "AI Resume Builder Project Screenshot"
  },
  {
    title: "AI Thumbnail Generator",
    description: "AI-powered thumbnail generation tool with 10+ reusable components, Clerk authentication, and ImageKit integration.",
    points: [
      "Constructed 10+ reusable UI components in React and TypeScript, cutting duplicate code across 5+ features",
      "Established Clerk for authentication and ImageKit for asset handling, reducing page load time by 40%",
      "Integrated AI-driven thumbnail generation with real-time preview and export functionality",
      "Deployed on Vercel with responsive design and optimized performance"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Clerk", "ImageKit", "REST APIs", "Vercel"],
    github: "https://github.com/avinashreddy09/AI-Thumbnail-Generator",
    live: "https://ai-thumbnail-generator-rust.vercel.app",
    imageSrc: "/certificates/ai-thumbnail-generator.png",
    imageAlt: "AI Thumbnail Generator Project Screenshot"
  },
  {
    title: "Helmet Violation Detection System",
    description: "Real-time AI system for helmet and license plate detection using YOLOv8 and PaddleOCR with full MLOps pipeline.",
    points: [
      "Developed AI system using YOLOv8 for real-time object detection with 120+ annotated images and sub-100ms inference",
      "Integrated PaddleOCR for number plate recognition, demonstrating multi-modal AI capabilities",
      "Built end-to-end MLOps pipeline with GitHub Actions, Docker, and Jenkins for automated deployment",
      "Conducted systematic edge-case testing across varying lighting, angles, and occlusions to validate detection robustness"
    ],
    tech: ["YOLOv8", "PyTorch", "PaddleOCR", "OpenCV", "Docker", "Jenkins", "GitHub Actions", "Python"],
    github: "https://github.com/avinashreddy09/Real-Time-Detection-of-Helmet-Violations-and-Capturing-Bike-Numbers-from-Number-Plates",
    live: null,
    imageSrc: "/certificates/helmet-detection.png",
    imageAlt: "Helmet Violation Detection System"
  }
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.1}>
            <div className="bg-card rounded-card shadow-smooth overflow-hidden hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
              {project.imageSrc ? (
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={project.imageSrc} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".fallback-image");
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  <div className="fallback-image hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="text-center">
                      <Github size={48} className="text-primary/40 mx-auto" />
                      <p className="text-sm text-body mt-2">Project Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Github size={48} className="text-primary/40" />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1">
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
                
                <p className="text-body text-sm mb-3 leading-relaxed">{project.description}</p>
                
                <ul className="space-y-1.5 mb-4">
                  {project.points.slice(0, 3).map((point, i) => (
                    <li key={i} className="text-xs text-body/80 leading-relaxed pl-3 border-l-2 border-primary/30">
                      {point.length > 120 ? point.substring(0, 120) + "..." : point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      +{project.tech.length - 5}
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