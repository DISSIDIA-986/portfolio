"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: SOCIAL_LINKS.github,
    color: "bg-gray-800 hover:bg-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: SOCIAL_LINKS.linkedin,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Email",
    icon: Mail,
    url: SOCIAL_LINKS.email,
    color: "bg-red-500 hover:bg-red-600",
  },
];

const terminalLines = [
  { prompt: "~", command: "whoami", delay: 0 },
  { output: "full-stack-developer && ai-engineer", delay: 0.3 },
  { prompt: "~", command: "experience --years", delay: 0.6 },
  { output: "17 years of shipping production software", delay: 0.9 },
  { prompt: "~", command: "superpower", delay: 1.2 },
  { output: "AI-augmented development velocity", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="lg:w-7/12" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              I build production software{" "}
              <span className="text-primary-600 dark:text-primary-400">
                at the speed of ideas.
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              Full Stack Developer | AI-Augmented Engineering |{" "}
              {SITE_CONFIG.location}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              17 years of full-stack engineering, now amplified by AI — from
              enterprise platforms handling 10K concurrent users to ML systems
              with 97% accuracy.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map(({ name, icon: Icon, url, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center transition-all duration-300`}
                  aria-label={name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Terminal Element */}
          <motion.div
            className="lg:w-5/12 w-full max-w-lg"
            variants={itemVariants}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900 dark:bg-gray-800 border border-gray-700">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400 text-sm font-mono">
                  terminal
                </span>
              </div>
              {/* Terminal Body */}
              <div className="p-4 font-mono text-sm leading-relaxed min-h-[200px]">
                {terminalLines.map((line, i) =>
                  "command" in line ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: line.delay, duration: 0.3 }}
                      className="flex gap-2"
                    >
                      <span className="text-green-400">
                        {line.prompt} $
                      </span>
                      <span className="text-white">{line.command}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: line.delay, duration: 0.3 }}
                      className="text-accent-400 ml-4 mb-2"
                    >
                      {line.output}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
