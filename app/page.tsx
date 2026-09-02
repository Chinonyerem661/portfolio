"use client";

import dynamic from "next/dynamic";
import CursorDot from "@/components/CursorDot";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ThemeProvider from "@/components/ThemeProvider";
import BackgroundGradient from "@/components/BackgroundGradient";

// Below-the-fold sections are code-split into separate chunks so the
// above-the-fold JS (Navbar/Hero/About) parses and hydrates first.
// SSR stays on (next/dynamic default) so content is still crawlable.
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen overflow-x-hidden text-black dark:text-[#f5f5f5] transition-colors duration-500">
        <BackgroundGradient />
        <CursorDot />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </ThemeProvider>
  );
}