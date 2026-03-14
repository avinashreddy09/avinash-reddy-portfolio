import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const contactInfo = [
  { icon: <Mail size={20} />, label: "Email", value: "avinashreddydonthireddy2006@gmail.com", href: "mailto:avinashreddydonthireddy2006@gmail.com" },
  { icon: <Phone size={20} />, label: "Phone", value: "+91-6309312355", href: "tel:+916309312355" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "avinashreddy09", href: "https://www.linkedin.com/in/avinashreddy09/" },
  { icon: <Github size={20} />, label: "GitHub", value: "avinashreddy09", href: "https://github.com/avinashreddy09" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="Feel free to reach out for collaborations or just a friendly hello" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-card p-4 rounded-card shadow-smooth hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div className="p-2.5 bg-primary/10 rounded-inner text-primary">{c.icon}</div>
                  <div>
                    <p className="text-xs text-body font-medium">{c.label}</p>
                    <p className="text-sm text-heading font-medium break-all">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-card p-6 rounded-card shadow-smooth space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-inner text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-inner text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-inner text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.98]"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
