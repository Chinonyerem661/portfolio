"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Massive Display Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display font-extrabold text-[clamp(3rem,7.5vw,9rem)] leading-[0.95] tracking-[-0.03em] text-black dark:text-[#f5f5f5]"
          >
            Software
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="font-display font-extrabold text-[clamp(3rem,7.5vw,9rem)] leading-[0.95] tracking-[-0.03em] text-black dark:text-[#f5f5f5]"
          >
            Developer <span className="text-[#888]">&</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-display font-extrabold text-[clamp(3rem,7.5vw,9rem)] leading-[0.95] tracking-[-0.03em] text-[#888]"
          >
            Digital Craftsman
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="text-lg md:text-xl text-[#888] leading-relaxed font-light max-w-lg">
            I&apos;m{" "}
            <span className="text-black dark:text-[#f5f5f5] font-medium">
              Ekezie Emmanuel Chinonyerem
            </span>{" "}
            — I design and build clean, responsive, full-stack applications
            with precision and attention to detail.
          </p>

          <a
            href="#projects"
            data-cursor-text="VIEW"
            className="cb-btn cb-btn-fill text-xs tracking-wider uppercase flex-shrink-0"
          >
            <span className="cb-btn-label">Explore Work</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4 text-[#888] text-xs tracking-wider uppercase"
      >
        <span className="w-12 h-[1px] bg-[#888]" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}