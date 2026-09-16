import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech Computer Science and Engineering",
    grade: "CGPA: 6.88",
    period: "Aug 2023 – Present",
  },
  {
    school: "Sastra Junior College",
    location: "Vijayawada, Andhra Pradesh",
    degree: "Intermediate",
    grade: "Percentage: 95.8%",
    period: "Jun 2021 – Feb 2023",
  },
  {
    school: "Bhashyam EM High School",
    location: "Vijayawada, Andhra Pradesh",
    degree: "Matriculation",
    grade: "Percentage: 100%",
    period: "Jun 2020 – Apr 2021",
  },
];

const EducationSection = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Education" subtitle="My academic journey" />
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.school} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <GraduationCap size={20} />
                </div>
                <div className="bg-card p-5 rounded-card shadow-smooth flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-heading">{edu.school}</h3>
                    <span className="text-xs text-body font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-body">{edu.location}</p>
                  <p className="text-sm text-heading font-medium mt-1">{edu.degree} • {edu.grade}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
