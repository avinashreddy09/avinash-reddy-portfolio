import { Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-body">Copyright © 2026 Avinash Reddy</p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/avinashreddy09/" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/avinashreddy09" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
