"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Puzzle,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer & Intern Team Lead",
    company: "Oud Technologies",
    duration: "Oct 2024 – Present",
    location: "Remote",
    description:
      "Leading a team of interns while delivering production-grade web applications. Serving as the primary liaison between design, backend, and intern teams to ensure consistent quality.",
    highlights: [
      "Architected responsive dashboards using React, TypeScript, Next.js, and Tailwind CSS.",
      "Managed state with Zustand and Redux Toolkit for complex application data flows.",
      "Conducted weekly code reviews, mentorship sessions, and managed PR workflows.",
      "Built reusable component libraries and design systems for multi-product consistency.",
      "Integrated REST APIs and collaborated with backend teams for seamless data pipelines.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Software Developer — Client Project",
    company: "Pneumabreed International Academy",
    duration: "Project Engagement",
    location: "Remote",
    description:
      "Built and delivered an admissions-focused marketing site for a private school, working directly with school administrators to turn their enrollment process into a clear digital experience.",
    highlights: [
      "Implemented an age-banded admissions funnel with client-reviewed content and copy.",
      "Wired up enquiry and application forms for real-time parent communication.",
      "Delivered on a tight timeline ahead of the school's admissions season.",
    ],
    skills: ["React", "Vite", "React Router", "Tailwind CSS"],
  },
  {
    title: "Software Developer — Client Project",
    company: "RoutePay",
    duration: "Project Engagement",
    location: "Remote",
    description:
      "Contributed to the marketing and product site for a Nigerian fintech platform, coordinating closely with stakeholders to represent payments, billing, and lending products accurately.",
    highlights: [
      "Built responsive, high-conversion pages for personal, business, and government payment solutions.",
      "Structured the developer-facing API portal section for a technical audience.",
      "Worked within brand and compliance guidelines for a regulated fintech product.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Software Developer — Client Project",
    company: "Beate Synergy",
    duration: "Project Engagement",
    location: "Remote",
    description:
      "Delivered a corporate site for an oil & gas engineering firm, translating technical service offerings into a confident visual language for enterprise clients.",
    highlights: [
      "Built motion-driven interactions with Framer Motion to communicate precision and capability.",
      "Structured service-pillar content — surface engineering, well testing, HPHT solutions — for a technical B2B audience.",
      "Collaborated directly with the client on messaging and positioning.",
    ],
    skills: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Software Developer — Client Project",
    company: "Crafwell Engineering",
    duration: "Project Engagement",
    location: "Remote",
    description:
      "Built a corporate site for an API-certified precision machining and fabrication company, focused on communicating technical credibility to oil & gas sector clients.",
    highlights: [
      "Presented equipment lines, quality certifications, and safety commitments clearly for enterprise buyers.",
      "Delivered a downloadable brochure/portfolio flow to support the client's sales follow-up.",
      "Worked with the client's team to source and organize technical content.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Software Developer — Client Project",
    company: "Routelink VAS",
    duration: "Project Engagement",
    location: "Remote",
    description:
      "Delivered an enterprise Value Added Services portal, integrating REST APIs for billing and carrier services across mobile networks in Nigeria.",
    highlights: [
      "Built a full-stack portal connecting billing integrations with carrier services.",
      "Designed the interface around a complex, multi-network data model.",
      "Delivered a production-ready platform serving customers across Nigeria's biggest carriers.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  },
];

const strengths = [
  {
    icon: <Puzzle size={24} strokeWidth={1.5} />,
    title: "Problem-Solving",
    description:
      "Expert at debugging complex issues across the stack and implementing efficient, reliable solutions.",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Collaboration",
    description:
      "Proven success in cross-functional teams using Agile methodologies.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: "Quality Focus",
    description:
      "Committed to clean, maintainable code with comprehensive testing practices.",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: "Adaptability",
    description:
      "Quick learner staying current with emerging technologies and industry trends.",
  },
];

export default function Experience() {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setSlide(([prev]) => {
      const next = (prev + dir + experiences.length) % experiences.length;
      return [next, dir];
    });
  };

  const goTo = (index: number) => {
    setSlide(([prev]) => [index, index > prev ? 1 : -1]);
  };

  const exp = experiences[current];

  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-xs font-medium text-[#888] uppercase tracking-[0.2em]">
            Experience
          </span>
          <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[1] tracking-tight text-black dark:text-[#f5f5f5]">
            Work
            <br />
            <span className="text-[#888]">Experience</span>
          </h2>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous experience"
              className="w-11 h-11 rounded-full border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center text-black dark:text-[#f5f5f5] hover:border-accent hover:text-accent transition-colors cursor-pointer bg-transparent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next experience"
              className="w-11 h-11 rounded-full border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center text-black dark:text-[#f5f5f5] hover:border-accent hover:text-accent transition-colors cursor-pointer bg-transparent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Experience Carousel */}
        <div className="accordion-item overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 md:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-baseline gap-6">
                  <span className="text-xs text-[#888] font-mono tabular-nums">
                    0{current + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-black dark:text-[#f5f5f5]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#888] mt-1">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-xs text-[#888] font-mono">
                    {exp.duration}
                  </span>
                  <span className="text-xs text-[#888]">{exp.location}</span>
                </div>
              </div>

              <div className="pl-0 md:pl-[calc(1.5rem+24px)]">
                <p className="text-[#888] text-sm leading-relaxed mb-6 max-w-2xl">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm">
                      <span className="text-[#888] mt-0.5 flex-shrink-0">
                        —
                      </span>
                      <span className="text-black/80 dark:text-white/80 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-medium text-[#888] uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to experience ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer bg-transparent border-none p-0 ${
                index === current
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-black/[0.12] dark:bg-white/[0.16] hover:bg-black/[0.24] dark:hover:bg-white/[0.3]"
              }`}
            />
          ))}
        </div>

        {/* Professional Strengths */}
        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10 md:mb-14"
          >
            <span className="text-xs font-medium text-[#888] uppercase tracking-[0.2em]">
              Professional Strengths
            </span>
            <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-7 rounded-2xl bg-white dark:bg-[#141414] border border-black/[0.06] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.04)] dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold text-black dark:text-[#f5f5f5] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
