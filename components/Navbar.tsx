"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Moon, Sun, Menu, X, Mail } from "lucide-react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="font-bold text-lg tracking-tight whitespace-nowrap">Ekezie C.</div>

            {/* Desktop Nav Links */}
            <div
              className={`hidden md:flex gap-8 text-sm font-medium ${
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

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex gap-4 text-gray-600 dark:text-gray-400">
                <a 
                  href="#" 
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
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1-idjrj-tbml9mp5WZcuxyOnKRSPnuLmq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:shadow-lg transition"
              >
                Resume
              </a>
            </div>

            {/* Mobile Header Options */}
            <div className="flex md:hidden items-center gap-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-600"
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Hamburger Trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Drawer Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] z-40 bg-white dark:bg-gray-950 transition-all duration-300 border-t border-gray-100 dark:border-gray-800 overflow-y-auto">
              <div className="flex flex-col items-center gap-6 py-12 px-6">
                {/* Mobile Nav Links */}
                <div className="flex flex-col items-center gap-6 text-lg font-semibold w-full">
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition ${
                      active === "about"
                        ? "text-cyan-500 font-bold"
                        : isDark
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition ${
                      active === "projects"
                        ? "text-cyan-500 font-bold"
                        : isDark
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Projects
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition ${
                      active === "experience"
                        ? "text-cyan-500 font-bold"
                        : isDark
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Experience
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition ${
                      active === "skills"
                        ? "text-cyan-500 font-bold"
                        : isDark
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Skills
                  </a>
                </div>

                <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 my-4"></div>

                {/* Mobile Social Links */}
                <div className="flex gap-6 text-gray-600 dark:text-gray-400">
                  <a
                    href="https://github.com/Chinonyerem661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition p-3 bg-gray-100 dark:bg-gray-900 rounded-full"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ekezie-chinonyerem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition p-3 bg-gray-100 dark:bg-gray-900 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="mailto:kezienonye@gmail.com"
                    className="hover:text-cyan-500 transition p-3 bg-gray-100 dark:bg-gray-900 rounded-full"
                    aria-label="Email"
                  >
                    <Mail size={22} />
                  </a>
                </div>

                {/* Mobile Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1-idjrj-tbml9mp5WZcuxyOnKRSPnuLmq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs text-center py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:shadow-lg transition mt-4"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
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
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 tracking-tight text-gray-900 dark:text-white">
              Frontend<br />
              Developer.
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl mb-12 leading-relaxed ${
                isDark ? "text-gray-200" : "text-gray-600"
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
