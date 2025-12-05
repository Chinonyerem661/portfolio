"use client";

import { Github, Linkedin, Mail, Dribbble, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-30">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-3 dark:text-white">
              Lets Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Have a project in mind? Lets build something amazing together.
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Dribbble"
            >
              <Dribbble size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Twitter"
            >
              <Twitter size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Discord"
            >
              <Dribbble size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Email"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Designed & Built{" "}
          <span className="text-red-500">❤️</span> by Ekezie Emmanuel Chinonyerem © 2025
        </p>
      </div>
    </footer>
  );
}