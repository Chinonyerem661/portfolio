"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const services = [
  {
    title: "UI/UX Development",
    description:
      "Building responsive, accessible SPAs with React, Next.js, and TypeScript. Pixel-perfect implementations from Figma to production.",
    tags: ["React", "Next.js", "TypeScript"],
    graphic: "bars",
  },
  {
    title: "Software Architecture",
    description:
      "Architecting scalable component libraries, design systems, and state management patterns using modern frameworks.",
    tags: ["Design Systems", "State Mgmt"],
    graphic: "chevrons",
  },
  {
    title: "API Integration",
    description:
      "Seamless REST API integration, data pipelines, and real-time features. Connecting frontend to backend services efficiently.",
    tags: ["REST", "WebSockets"],
    graphic: "arcs",
  },
  {
    title: "Team Leadership",
    description:
      "Leading teams, conducting code reviews, mentoring interns, and managing PR workflows for production-grade applications.",
    tags: ["Mentorship", "Code Review"],
    graphic: "rings",
  },
] as const;

function Graphic({ type }: { type: (typeof services)[number]["graphic"] }) {
  if (type === "bars") {
    return (
      <div className="absolute inset-y-0 right-0 w-3/5 flex pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex-1"
            style={{ background: `rgba(255,255,255,${0.02 + i * 0.02})` }}
          />
        ))}
      </div>
    );
  }

  if (type === "chevrons") {
    return (
      <div className="absolute -bottom-16 right-6 w-80 h-80 pointer-events-none">
        <div
          className="absolute inset-0 bg-white/[0.06]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute inset-10"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          className="absolute inset-20"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            background: "rgba(255,255,255,0.1)",
          }}
        />
      </div>
    );
  }

  if (type === "arcs") {
    return (
      <div className="absolute -bottom-32 -right-16 w-80 h-80 pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
            style={{
              width: 320 - i * 70,
              height: 320 - i * 70,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute -bottom-20 -right-10 w-72 h-72 pointer-events-none">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
          style={{
            width: 280 - i * 60,
            height: 280 - i * 60,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [active, setActive] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const activeBg = isDark ? "#1a1a1a" : "#000000";
  const inactiveBg = isDark ? "#1f1f1f" : "#eeeeee";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setActive(true)}
      className="relative"
    >
      <motion.div
        animate={{ backgroundColor: active ? activeBg : inactiveBg }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden rounded-[2rem] ${
          isDark ? "border border-white/[0.06]" : ""
        }`}
      >
        {active && <Graphic type={service.graphic} />}

        <div className="relative p-8 md:p-16">
          <div className="flex items-start justify-between gap-6">
            <h3
              className={`font-display text-4xl md:text-6xl font-bold tracking-tight transition-colors duration-300 ${
                active ? "text-white" : isDark ? "text-[#f5f5f5]" : "text-black"
              }`}
            >
              {service.title}
            </h3>
            <span
              className={`font-mono text-xl md:text-3xl tabular-nums flex-shrink-0 transition-colors duration-300 ${
                active ? "text-white/50" : isDark ? "text-white/20" : "text-black/20"
              }`}
            >
              0{index + 1}
            </span>
          </div>

          <div
            style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
            className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="overflow-hidden">
              <motion.div
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.5, delay: active ? 0.2 : 0 }}
                className="pt-6 md:pt-8"
              >
                <p className="max-w-md md:max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-[11px] text-white/30 font-medium uppercase tracking-wider mt-6">
                  {service.tags.join(" · ")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-20">
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
            About
          </span>
          <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
        </motion.div>

        {/* Big Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mb-24 md:mb-40"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-black dark:text-[#f5f5f5]">
            Software Developer focused on building clean, performant,
            user-first products — from interfaces to the systems behind
            them — with{" "}
            <span className="text-[#888]">
              modern tools and thoughtful design.
            </span>
          </h2>
        </motion.div>

        {/* What I Do — Scroll-Reveal Accordion */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="text-xs font-medium text-[#888] uppercase tracking-[0.2em]">
            What I Do
          </span>
          <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
