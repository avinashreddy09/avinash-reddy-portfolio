import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-smooth"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold text-heading"
          >
            &lt;Avinash<span className="text-primary">Reddy</span>/&gt;
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-body hover:text-heading"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 ml-2 rounded-md text-body hover:text-heading transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://drive.google.com/file/d/1vFWiP3uLWLrdS2sqBDtAcHE0HqisGXMR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-body hover:text-heading"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-body hover:text-heading"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === link.href
                    ? "text-primary bg-primary/10"
                    : "text-body hover:text-heading"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1vFWiP3uLWLrdS2sqBDtAcHE0HqisGXMR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
