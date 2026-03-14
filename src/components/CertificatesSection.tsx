import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const certs = [
  {
    title: "DevOps Foundations",
    issuer: "ORACLE",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7A40C38C10648B1D7272E01DF60927DE1D1C625C1918932DEC4405EB81269580",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1z7n2Xh6E9SEltyZwQYF5jjTXxb1VpoCS/view?usp=drive_link",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Jan 2024",
    link: "https://www.freecodecamp.org/certification/fcca09d0c92-ac40-455f-8325-2f4cb30e0df8/responsive-web-design",
  },
  {
    title: "HTML, CSS, Git, React.js",
    issuer: "LPU Training",
    date: "Jun–Jul 2025",
    link: "https://www.linkedin.com/in/avinashreddy09/",
    linkLabel: "Available on Request",
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Certificates" subtitle="Professional certifications and credentials" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="bg-card p-6 rounded-card shadow-smooth hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-inner text-primary shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-heading">{c.title}</h3>
                  <p className="text-sm text-body mt-1">{c.issuer} • {c.date}</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    {c.linkLabel || "View Certificate"}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
