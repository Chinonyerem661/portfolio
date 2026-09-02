"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Magnetic from "./Magnetic";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-white/90 dark:bg-[#0a0a0a]/90 border-b border-black/[0.04] dark:border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <a
              href="#home"
              className="font-display text-xl font-bold tracking-tight text-black dark:text-[#f5f5f5] no-underline"
            >
              Ekezie<span className="text-[#888]">.</span>dev
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.12}>
                <a
                  href={link.href}
                  className="nav-text-reveal text-sm font-medium text-black dark:text-[#f5f5f5] hover:text-accent no-underline transition-colors"
                >
                  <span data-text={link.name}>{link.name}</span>
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic strength={0.2}>
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.12] text-accent bg-transparent cursor-pointer transition-colors hover:border-accent"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="https://drive.google.com/file/d/1-idjrj-tbml9mp5WZcuxyOnKRSPnuLmq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cb-btn cb-btn-fill text-xs tracking-wider uppercase"
                data-cursor-text="CV"
              >
                <span className="cb-btn-label">Resume</span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[200] bg-transparent border-none cursor-pointer"
            aria-label="Toggle Menu"
            style={{ mixBlendMode: "exclusion" }}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 font-display text-[3rem] font-bold tracking-tight text-black dark:text-[#f5f5f5] no-underline leading-none"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-16 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between"
            >
              <div className="flex gap-8 text-sm text-[#888]">
                <a
                  href="https://github.com/Chinonyerem661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline no-underline text-[#888] hover:text-black dark:hover:text-[#f5f5f5] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ekezie-chinonyerem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline no-underline text-[#888] hover:text-black dark:hover:text-[#f5f5f5] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:kezienonye@gmail.com"
                  className="link-underline no-underline text-[#888] hover:text-black dark:hover:text-[#f5f5f5] transition-colors"
                >
                  Email
                </a>
              </div>

              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.12] text-accent bg-transparent cursor-pointer"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
