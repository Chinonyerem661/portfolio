// app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorDot />
      <Navbar />
      {/* <section id="home">
        <Hero />
      </section> */}
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Footer />
    </main>
  );
}