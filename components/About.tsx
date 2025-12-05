// components/About.tsx
"use client";

import { Code2, Zap, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-4">
          <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase">
            GET TO KNOW ME
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 dark:text-white">
          About Me
        </h2>

        {/* Underline */}
        <div className="flex justify-center mb-16">
          <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="flex items-center justify-center">
          {/* Terminal Content */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-2xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm font-mono">
                  Chinonyerem@portfolio:~$
                </span>
                <span className="ml-auto text-gray-500 text-sm">bash</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-gray-300 space-y-4 bg-gradient-to-b from-gray-900 to-gray-950">
                <div>
                  <span className="text-cyan-400">Chinonyerem@portfolio:~$</span>
                  <span className="text-gray-400 ml-2">cat about.txt</span>
                </div>

                <div className="text-green-400 space-y-3">
                  <p>Hi, Im Ekezie Emmanuel Chinonyerem 👋</p>
                  <p>Frontend Web Developer </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Passionate about bridging creativity and functionality. I
                  design and build modern, responsive, and scalable web
                  applications from the ground up.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  With a solid foundation in front-end
                  development, I specialize in delivering clean code, seamless
                  user experiences, and production-ready solutions. My expertise
                  spans across the MERN stack to the depths of blockchain
                  technologies like Ethereum and Solana.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I am driven by the thrill of building real-world projects,
                  constantly learning emerging technologies, and contributing to
                  impactful digital experiences. Whether its a real time chat
                  app, an e-commerce platform, or a decentralized application
                  (dApp), I love turning ideas into reliable products.
                </p>

                <div>
                  <span className="text-cyan-400">Chinonyerem@portfolio:~$</span>
                  <span className="text-gray-600 ml-2 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Dot - Right side */}
        <div className="fixed right-6 bottom-32 w-4 h-4 bg-red-500 rounded-full hidden lg:block"></div>
      </div>
    </section>
  );
}
