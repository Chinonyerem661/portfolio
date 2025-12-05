"use client";

import { MapPin, Calendar, CheckCircle, Lightbulb } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  icon: string;
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Oud Technologies",
    duration: "Oct 2024 - Present",
    location: "Remote",
    description:
      "Leading a team of frontend interns while delivering production-ready web applications. Serving as the primary liaison between the intern team and core development team, coordinating workflows and ensuring quality standards across all deliverables.",
    highlights: [
      "Develop responsive dashboards and user interfaces with React, TypeScript, Next.js, and Tailwind CSS, utilizing Zustand and Redux for state management.",
      "Conduct code reviews, provide technical guidance, and manage task assignments for the intern team.",
      "Build reusable component libraries and implement design systems for consistency across applications.",
      "Integrate REST APIs and collaborate with backend teams to deliver seamless full-stack solutions.",
      "Review pull requests and enforce coding standards using Git workflows and best practices.",
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
    icon: "💼",
  },
  // {
  //   title: "Junior Web Developer",
  //   company: "Dev Hq",
  //   duration: "Jan 2025 - Sep 2025",
  //   location: "Remote",
  //   description:
  //     "Developed responsive web interfaces for multiple products using modern frontend technologies, focusing on user experience and seamless cross-device functionality.",
  //   highlights: [
  //     "Developed responsive landing page and settings interface for StreamFi product using React.js, Next.js, and Tailwind CSS with TypeScript.",
  //     "Built user authentication interface for Nourify product, ensuring seamless user experience across devices.",
  //     "Collaborated with the development team via GitHub to resolve UI issues and contribute to codebase maintenance.",
  //     "Implemented modern frontend technologies including React hooks and component-based architecture.",
  //   ],
  //   skills: [
  //     "React.js",
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "GitHub",
  //     "Responsive Design",
  //   ],
  //   icon: "🚀",
  // },
  // {
  //   title: "Intern",
  //   company: "DopaStak",
  //   duration: "May 2024 - Oct 2024",
  //   location: "Remote",
  //   description:
  //     "Contributed to development and maintenance of web applications at a dynamic software development company focused on creating scalable web applications and digital solutions.",
  //   highlights: [
  //     "Collaborated with senior developers to design and implement backend features using JavaScript, Python, and PHP.",
  //     "Participated in web application optimization initiatives focused on improving speed and scalability performance.",
  //     "Ensured seamless operation of web applications through code reviews, testing, and collaborative problem-solving.",
  //     "Engaged in continuous learning to stay current with latest technologies and best practices.",
  //   ],
  //   skills: [
  //     "JavaScript",
  //     "Python",
  //     "PHP",
  //     "Web Optimization",
  //     "Code Review",
  //     "Testing",
  //   ],
  //   icon: "⚡",
  // },
  // {
  //   title: "Student",
  //   company: "Attueyi Coding Academy",
  //   duration: "Jan 2024 - Mar 2024",
  //   location: "UNN Enugu",
  //   description:
  //     "Completed comprehensive frontend development curriculum covering modern web development technologies and best practices.",
  //   highlights: [
  //     "Researched and developed an AI-based prototype addressing real-world environmental challenges.",
  //     "Attended expert-led mentorship sessions on data modeling, optimization, and project presentation.",
  //     "Delivered a final project presentation to industry experts, incorporating iterative feedback.",
  //     "Earned certifications from AICTE, Shell, and Edunet Foundation.",
  //   ],
  //   skills: [
  //     "JavaScript (ES6+)",
  //     "React.js",
  //     "Tailwind CSS",
  //     "Responsive Design",
  //     "Team Collaboration",
  //   ],
  //   icon: "�",
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-4">
          <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase">
            Career Journey
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 dark:text-white">
          Experience
        </h2>

        {/* Underline */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card card-accent rounded-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {exp.icon}
                  </div>

                  {/* Title and Meta */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold dark:text-white mb-3">
                      {exp.title}
                    </h3>

                    {/* Location and Duration */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-cyan-500" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-cyan-500" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-8 space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-cyan-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb size={18} className="text-cyan-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Skills Gained
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Accent */}
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
