"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "kezienonye@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative">
      {/* Massive CTA Section */}
      <section className="py-32 md:py-48 px-6 md:px-20">
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
              Contact
            </span>
            <span className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/[0.08]" />
          </motion.div>

          {/* Giant CTA Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="font-display text-[clamp(3rem,8vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-black dark:text-[#f5f5f5]">
              Have an
              <br />
              idea? <span className="text-[#888]">Let&apos;s</span>
              <br />
              <span className="text-[#888]">talk.</span>
            </h2>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${email}`}
                data-cursor-text="MAIL"
                className="cb-btn cb-btn-fill text-sm tracking-wider"
              >
                <span className="cb-btn-label">
                  Send Email
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <button
                onClick={handleCopyEmail}
                data-cursor-text="COPY"
                className="cb-btn cb-btn-outline text-sm"
              >
                <span className="cb-btn-label">
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{email}</span>
                    </>
                  )}
                </span>
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* Dark Bottom Footer */}
      <div className="dark-section">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left - Logo/Name */}
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Ekezie<span className="text-[#555]">.</span>dev
              </span>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center gap-8">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/Chinonyerem661",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/ekezie-chinonyerem/",
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  name: "Email",
                  href: `mailto:${email}`,
                },
              ].map((link) => (
                <Magnetic key={link.name} strength={0.2}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="link-underline text-sm text-[#666] hover:text-accent transition-colors duration-300 no-underline"
                  >
                    {link.name}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Right - Copyright */}
            <div className="text-xs text-[#555]">
              <p>
                © {new Date().getFullYear()} Ekezie Emmanuel Chinonyerem
              </p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}