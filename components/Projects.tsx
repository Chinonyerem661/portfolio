"use client";

import { Code2, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "CINEMIX",
    description:
      "A modern and responsive web application for discovering movies, exploring popular titles, and checking movie details built using React and TMDb (The Movie Database) API.",
    tags: ["React", "JavaScript", "Tailind CSS", "TMDb API"],
    githubUrl: "https://github.com/Chinonyerem661/Movies-site",
    liveUrl: "https://chinonyerem661.github.io/Movies-site/",
  },
  {
    title: "Krea-AI",
    description:
      "A pixel perfect recreation of Krea AI interface, built with Next.js adn Typescript",
    tags: ["Next.js", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/Chinonyerem661/krea-ai-frontend",
    liveUrl: "https://cartolinks-krea-ai-frontend-submit.netlify.app/",
  },
  {
    title: "TodoCLI",
    description:
      "A powerful command-line task management tool with features like priorities, due dates, and categories",
    tags: ["Node.js", "Commander.js", "Chalk"],
    githubUrl: "https://github.com/yourusername/todocli",
  },
  {
    title: "Lumen-by-RJDP",
    description:
      "A beautiful and modern web application with stunning UI and smooth animations",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "https://github.com/yourusername/lumen-by-rjdp",
    liveUrl: "https://lumen.example.com",
  },
  {
    title: "EV-Adoption-Forecasting",
    description:
      "ML-powered forecasting system to predict electric vehicle adoption trends using advanced analytics",
    tags: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/yourusername/ev-adoption-forecasting",
    liveUrl: "https://ev-forecasting.example.com",
  },
  {
    title: "GitSensei",
    description:
      "AI-powered Git assistant to help you with Git commands, best practices, and workflows",
    tags: ["Python", "OpenAI", "Git"],
    githubUrl: "https://github.com/yourusername/gitsensei",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center relative mb-4">
          <span className="absolute -left-8 top-0 w-2 h-2 bg-red-500 rounded-full"></span>
          <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase">
            Portfolio
          </p>
        </div>

        {/* Section Title */}
        <h2 className="flex justify-center text-5xl md:text-6xl font-black mb-4 dark:text-white text-gray-900">
          Featured Projects
        </h2>

        {/* Underline */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Projects Grid - 2 rows of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card card-accent rounded-lg transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Code2
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                >
                  <Code2 size={16} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-semibold hover:shadow-lg transition flex items-center gap-2"
          >
            View All Repositories
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}