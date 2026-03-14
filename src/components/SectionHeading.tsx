import AnimatedSection from "./AnimatedSection";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">{title}</h2>
    {subtitle && <p className="text-body max-w-2xl mx-auto text-pretty">{subtitle}</p>}
    <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
  </AnimatedSection>
);

export default SectionHeading;
