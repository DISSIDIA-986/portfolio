"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Bot,
  Code,
  Rocket,
  Terminal,
  Shield,
  Bell,
  GitBranch,
  FolderGit2,
  Layers,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const pipelineSteps = [
  {
    icon: Mic,
    title: "Voice",
    description: "Speak ideas naturally in any language",
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    icon: Bot,
    title: "AI Agent",
    description: "Claude Code orchestrates implementation",
    color: "text-primary-500",
    bgColor: "bg-primary-50 dark:bg-primary-900/20",
    borderColor: "border-primary-200 dark:border-primary-800",
  },
  {
    icon: Code,
    title: "Code",
    description: "Type-safe, tested, production-ready",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
  {
    icon: Rocket,
    title: "Ship",
    description: "CI/CD to production in minutes",
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800",
  },
];

const toolkit = [
  {
    icon: Terminal,
    name: "vox.sh",
    description:
      "Voice-to-clipboard pipeline: Groq Whisper ASR → Gemini AI correction → instant IDE paste. Supports bilingual Chinese-English with programming terminology.",
    tech: "Bash · Groq · Gemini",
  },
  {
    icon: Shield,
    name: "akm",
    description:
      "AES-256-GCM encrypted API key manager built in Go. Secure credential storage via macOS Keychain + SQLite for multi-service development.",
    tech: "Go · AES-256 · Keychain",
  },
  {
    icon: Bell,
    name: "claude-notify",
    description:
      "Real-time Telegram notifications for Claude Code task completion. LLM-powered session summarization via Groq for async monitoring.",
    tech: "Bash · Telegram · Groq",
  },
];

const metrics = [
  { icon: FolderGit2, value: "84", label: "Active Repos", sublabel: "past year" },
  { icon: GitBranch, value: "1,139+", label: "Commits", sublabel: "past year" },
  { icon: Layers, value: "25", label: "Projects", sublabel: "in development" },
  { icon: Zap, value: "9", label: "Languages", sublabel: "in production" },
];

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="py-12 md:py-16 bg-white dark:bg-gray-950"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              title="How I Build"
              subtitle="The methodology above is powered by a custom-built development environment. I don't just use AI tools — I build them."
            />
          </motion.div>

          {/* Pipeline */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-stretch gap-4 mb-16"
          >
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex-1 flex items-center gap-4 md:flex-col md:gap-0">
                  <div
                    className={`flex-1 w-full p-5 rounded-xl border ${step.borderColor} ${step.bgColor} text-center`}
                  >
                    <Icon
                      className={`w-8 h-8 ${step.color} mx-auto mb-2`}
                    />
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <span className="hidden md:block text-2xl text-gray-300 dark:text-gray-600 mt-4 mx-auto">
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* VIBE Toolkit */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              VIBE Toolkit
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Custom-built tools powering voice-integrated development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {toolkit.map((tool) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-amber-500" />
                      <h4 className="font-bold text-gray-800 dark:text-white font-mono">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {tool.description}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                      {tool.tech}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Development Metrics */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="text-center p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <Icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      {metric.value}
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {metric.label}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {metric.sublabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
