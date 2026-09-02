"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: "RoutePay",
    category: "Full Stack",
    description:
      "A Nigerian fintech platform for payments, bill settlement, and micro-lending, built for clarity, trust, and fast, reliable transaction flows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://routepay.com/",
    image: "/project-routepay.webp",
  },
  {
    title: "Crafwell Engineering",
    category: "Frontend",
    description:
      "Site for an API-certified precision machining and fabrication company serving the oil & gas sector in Port Harcourt, built to communicate technical credibility.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.crafwellengineering.com/",
    image: "/project-crafwell.webp",
  },
  {
    title: "Routelink VAS",
    category: "Full Stack",
    description:
      "Enterprise Value Added Services portal delivering billing integrations and carrier services for mobile networks across Nigeria.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://routelink-vas.vercel.app/",
    image: "/project-routelink.webp",
  },
  {
    title: "CINEMIX",
    category: "Frontend",
    description:
      "A modern movie discovery application with responsive grid layouts, search functionality, and real-time data from the TMDb API.",
    tags: ["React", "JavaScript", "Tailwind CSS", "TMDb API"],
    liveUrl: "https://chinonyerem661.github.io/Movies-site/",
    image: "/project-cinemix.webp",
  },
  {
    title: "Beate Synergy",
    category: "Frontend",
    description:
      "Corporate site for an oil & gas engineering and technical services firm in Lagos, presenting capabilities with a precise, industrial visual language.",
    tags: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://beatesynergy.com/",
    image: "/project-beatesynergy.webp",
  },
  {
    title: "Pneumabreed International Academy",
    category: "Frontend",
    description:
      "Digital presence for a Christian private school in Port Harcourt — clean information architecture and admissions content built for parents and prospective students.",
    tags: ["React", "Vite", "React Router", "Tailwind CSS"],
    liveUrl: "https://pneumabreed-academy.vercel.app/",
    image: "/project-pneumabreed.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-20">
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
            Selected Work
          </span>
          <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[1] tracking-tight text-black dark:text-[#f5f5f5] mb-16 md:mb-24"
        >
          Featured
          <br />
          <span className="text-[#888]">Projects</span>
        </motion.h2>

        {/* Projects Grid — 2 col staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index % 2 === 0 ? 0 : 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={index % 2 !== 0 ? "md:mt-24" : ""}
            >
              {/* Image Container — fixed aspect ratio, no fill prop */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full overflow-hidden rounded-2xl bg-[#f5f5f5] dark:bg-[#141414] group cursor-pointer"
                style={{ aspectRatio: "4 / 3" }}
                data-cursor-text="VIEW"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>

              {/* Caption */}
              <div className="mt-6 md:mt-8">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-black dark:text-[#f5f5f5]">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#888] font-medium uppercase tracking-wider flex-shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-[#888] leading-relaxed mb-4 max-w-lg">
                  {project.description}
                </p>

                {/* Tags as inline text */}
                <p className="text-[11px] text-[#aaa] font-medium uppercase tracking-wider mb-5">
                  {project.tags.join(" · ")}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                  {project.liveUrl && (
                    <Magnetic strength={0.15}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-sm font-medium text-black dark:text-[#f5f5f5] hover:text-accent no-underline transition-colors"
                        data-cursor-text="LIVE"
                      >
                        Live Demo →
                      </a>
                    </Magnetic>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}