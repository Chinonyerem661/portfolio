"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Moon, Sun } from "lucide-react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState<string>("home");

  const handleScroll = () => {
    const sections = [
      "home",
      "projects",
      
      "experience",
      
      "skills",
    ];
    let current = "home";
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 200) current = id;
    }
    setActive(current);
  };

  useEffect(() => {
    // Initialize theme from localStorage, default to light mode
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const shouldUseDark = storedTheme === "dark";
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Reflect theme on root element and persist
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Navbar */}
        <header
          className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-colors duration-300 ${
            isDark
              ? "bg-gray-900/80 border-b border-gray-800"
              : "bg-white/80 border-b border-gray-100"
          }`}
        >
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="font-bold text-lg tracking-tight">Ekezie C.</div>

            {/* Nav Links */}
            <div
              className={`flex gap-8 text-sm font-medium ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <a
                href="#about"
                className={
                  active === "about"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                About
              </a>
              <a
                href="#projects"
                className={
                  active === "projects"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                Projects
              </a>
              {/* <a
                href="#articles"
                className={
                  active === "articles"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                Articles
              </a> */}
              <a
                href="#experience"
                className={
                  active === "experience"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                Experience
              </a>
              {/* <a
                href="#activity"
                className={
                  active === "activity"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                Activity
              </a> */}
              <a
                href="#skills"
                className={
                  active === "skills"
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "hover:opacity-70 transition"
                }
              >
                Skills
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex gap-4 text-gray-600 dark:text-gray-400">
                <a 
                  href=" " 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://github.com/Chinonyerem661" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ekezie-chinonyerem/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Resume Button */}
              <button className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:shadow-lg transition">
                Resume
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative Dot */}
            <div
              className={`flex justify-end mb-12 ${
                isDark ? "text-cyan-400" : "text-red-500"
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-current"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 tracking-tight">
              Frontend<br />
              Developer.
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl mb-12 leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I design and build modern, responsive, and scalable web
              applications
              <br />
              that bridge creativity and functionality.
            </p>

            {/* CTA Button */}
            <a
              href="#projects"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg inline-block ${
                isDark
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              View My Work →
            </a>

            {/* Decorative Dot */}
            <div
              className={`flex justify-end mt-20 ${
                isDark ? "text-cyan-400" : ""
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
