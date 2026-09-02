"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Wrench,
  Palette,
  Atom,
  FileCode2,
  Wind,
  Zap,
  Server,
  Link2,
  GitBranch,
  Smartphone,
  Braces,
  Layers,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  icon: React.ReactNode;
}

const skillsList: SkillItem[] = [
  { name: "React / Next.js", level: "Expert", icon: <Atom size={22} strokeWidth={1.5} /> },
  { name: "TypeScript", level: "Advanced", icon: <Braces size={22} strokeWidth={1.5} /> },
  { name: "Tailwind CSS", level: "Expert", icon: <Wind size={22} strokeWidth={1.5} /> },
  { name: "JavaScript ES6+", level: "Expert", icon: <FileCode2 size={22} strokeWidth={1.5} /> },
  { name: "Zustand & Redux", level: "Advanced", icon: <Zap size={22} strokeWidth={1.5} /> },
  { name: "Node.js", level: "Proficient", icon: <Server size={22} strokeWidth={1.5} /> },
  { name: "REST APIs", level: "Advanced", icon: <Link2 size={22} strokeWidth={1.5} /> },
  { name: "PostgreSQL", level: "Proficient", icon: <Database size={22} strokeWidth={1.5} /> },
  { name: "Git & GitHub", level: "Expert", icon: <GitBranch size={22} strokeWidth={1.5} /> },
  { name: "Responsive Design", level: "Expert", icon: <Smartphone size={22} strokeWidth={1.5} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-20">
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
            Skills & Tools
          </span>
          <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[1] tracking-tight text-black dark:text-[#f5f5f5] mb-6"
        >
          Tech
          <br />
          <span className="text-[#888]">Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#888] max-w-md text-base mb-16 md:mb-20"
        >
          Frameworks and tools I use daily to build production web applications.
        </motion.p>

        {/* Marquee Carousel */}
        <div className="relative overflow-hidden mb-20 md:mb-28 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent pointer-events-none" />

          <div className="animate-marquee flex gap-4 md:gap-5">
            {[...skillsList, ...skillsList, ...skillsList].map(
              (skill, index) => (
                <div
                  key={index}
                  data-cursor-text={skill.level}
                  className="flex-shrink-0 w-44 md:w-48 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer group
                    bg-white dark:bg-[#141414] border border-black/[0.06] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.04)] dark:shadow-none
                    hover:border-black/[0.12] dark:hover:border-white/[0.14] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_-12px_rgba(0,0,0,0.08)] dark:hover:shadow-none
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:-translate-y-1"
                >
                  <span className="text-accent transition-transform duration-500 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="font-display font-bold text-black dark:text-[#f5f5f5] text-sm text-center group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-500">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest">
                    {skill.level}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Code size={24} strokeWidth={1.5} />,
              title: "Frontend",
              description:
                "Building responsive, accessible SPAs with React, Next.js, and TypeScript.",
              stack: "React · Next.js · TypeScript",
            },
            {
              icon: <Palette size={24} strokeWidth={1.5} />,
              title: "Styling & UI",
              description:
                "Crafting design systems with Tailwind CSS, component libraries, and micro-animations.",
              stack: "Tailwind · Framer Motion",
            },
            {
              icon: <Database size={24} strokeWidth={1.5} />,
              title: "Backend & APIs",
              description:
                "RESTful APIs, Node.js services, Python scripting, and PostgreSQL databases.",
              stack: "Node · Python · Postgres",
            },
            {
              icon: <Wrench size={24} strokeWidth={1.5} />,
              title: "Tooling & DevOps",
              description:
                "Git workflows, code reviews, Vercel deployments, and CI/CD automation.",
              stack: "Git · Vercel · CI/CD",
            },
          ].map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-7 rounded-2xl flex flex-col justify-between
                bg-white dark:bg-[#141414] border border-black/[0.06] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.04)] dark:shadow-none
                hover:border-black/[0.12] dark:hover:border-white/[0.14] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_-12px_rgba(0,0,0,0.08)] dark:hover:shadow-none
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 group-hover:scale-105 transition-all duration-500 mb-5">
                  {cat.icon}
                </div>
                <h3 className="font-display text-base font-bold text-black dark:text-[#f5f5f5] mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed mb-5">
                  {cat.description}
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#aaa] tracking-wider">
                {cat.stack}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
