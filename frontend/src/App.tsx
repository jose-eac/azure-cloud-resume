// src/App.tsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { resumeData } from "./data";

interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-12 border-b border-gray-100 last:border-0"
  >
    <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 font-semibold">
      {title}
    </h2>
    {children}
  </motion.section>
);

export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 font-serif bg-canvas text-ink">
      <header className="mb-20">
        <h1 className="text-4xl font-light tracking-tight">
          {resumeData.name}
        </h1>
        <p className="font-sans text-gray-500 italic mt-2">{resumeData.role}</p>

        <div className="flex gap-5 mt-6 text-gray-400">
          <a
            href={`mailto:${resumeData.email}`}
            className="hover:text-accent transition-colors"
          >
            <Mail size={20} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </header>

      {/* Profile Section */}
      <Section title="Profile">
        <p className="text-xl leading-relaxed font-sans">{resumeData.about}</p>
      </Section>

      {/* Experience Section */}
      <Section title="Experience">
        <div className="space-y-10">
          {resumeData.experience.map((exp: ExperienceItem, i: number) => (
            <div key={i} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium font-sans group-hover:text-accent transition-colors">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-400 font-sans">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2 italic">{exp.role}</p>
              <p className="text-gray-600 leading-relaxed font-sans">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Capabilities">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {resumeData.skills.map((skill: string) => (
            <span
              key={skill}
              className="text-sm font-sans tracking-wide text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} — Built with React & Care
        </p>
      </footer>
    </div>
  );
}
