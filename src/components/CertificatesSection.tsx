import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "ORACLE",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/13phOdKiwNundXyolBTPUMHv5DBoMJpSF/view?usp=drivesdk",
    imageSrc: "/certificates/oracle-devops.png",  // Path from public folder
    imageAlt: "Oracle DevOps Professional Certificate",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Jan–Apr 2025",
    link: "https://drive.google.com/file/d/1z7n2Xh6E9SEltyZwQYF5jjTXxb1VpoCS/view?usp=drive_link",
    imageSrc: "/certificates/nptel-cloud.png",
    imageAlt: "NPTEL Cloud Computing Certificate",
  },
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 31, 2023",
    link: "https://www.freecodecamp.org/certification/fcca09d0c92-ac40-455f-8325-2f4cb30e0df8/responsive-web-design",
    imageSrc: "/certificates/freecodecamp.png",
    imageAlt: "freeCodeCamp Responsive Web Design Certificate",
  },
  {
    title: "Data Structures and Algorithms using cpp",
    issuer: "iamneo",
    date: "Jun–Jul 2024",
    link: "https://drive.google.com/file/d/1YmA1A4_VivlYnwA-z1ue-s1J8Bq1otlz/view?usp=drive_link",
    linkLabel: "View certificate",
    imageSrc: "/certificates/lpu-training.png",
    imageAlt: "LPU Training Certificate",
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-20 bg-surface">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Certificates" subtitle="Professional certifications and credentials" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="bg-card rounded-card shadow-smooth overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={c.imageSrc} 
                  alt={c.imageAlt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML += `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center">
                          <Award size={48} class="text-primary/40 mx-auto" />
                          <p class="text-sm text-body mt-2">Certificate image</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading leading-tight">{c.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{c.issuer}</p>
                  </div>
                </div>
                
                <p className="text-sm text-body mb-4">{c.date}</p>
                
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  {c.linkLabel || "View Certificate"}
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;