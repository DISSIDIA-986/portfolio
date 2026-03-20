"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import TerminalBlock from "@/components/ui/TerminalBlock";

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
  {
    output: "jason-niu — 17yr full-stack / ai-augmented engineer",
    delay: 0.3,
  },
  { prompt: "~", command: "cat philosophy.txt", delay: 0.6 },
  {
    output: '"Every hard problem is a system trying to teach you something."',
    delay: 0.9,
  },
  { prompt: "~", command: "ls ~/tools/", delay: 1.2 },
  { output: "vox.sh    akm    claude-notify    gstack", delay: 1.5 },
  { prompt: "~", command: "uptime", delay: 1.8 },
  { output: "1,139+ commits this year. Still shipping.", delay: 2.1 },
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
              17 years of solving hard problems.{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Now I solve them at AI speed.
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              Full Stack Developer in Calgary — I combine deep engineering
              experience with AI-augmented development to ship production
              software at conversation speed.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              From enterprise platforms handling 10K concurrent users to ML
              systems with 97.4% accuracy — I&apos;ve built systems across
              fintech, e-commerce, smart buildings, and AI. Today, every project
              I build uses a voice-driven AI development environment I created
              myself.
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
            <TerminalBlock>
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
            </TerminalBlock>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#how-i-think"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
