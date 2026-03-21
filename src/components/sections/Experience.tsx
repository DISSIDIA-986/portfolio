"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import experiences from "@/data/experiences";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-16 bg-white dark:bg-stone-900"
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
              title="Experience"
              subtitle="Every role started with a hard problem. Here's what I built to solve them."
            />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative p-6 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/50 hover:shadow-lg transition-shadow"
              >
                {/* Education badge */}
                {exp.type === "education" && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                    Education
                  </span>
                )}

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-400">
                    Problem
                  </span>
                  <p className="mt-1 text-stone-800 dark:text-white font-medium">
                    {exp.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-400">
                    Solution
                  </span>
                  <ul className="mt-1 space-y-1.5">
                    {exp.solution.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-stone-600 dark:text-stone-300 flex gap-2"
                      >
                        <span className="text-primary-400 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-5">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-400">
                    Impact
                  </span>
                  <p className="mt-1 text-sm text-stone-700 dark:text-stone-200 font-medium">
                    {exp.impact}
                  </p>
                </div>

                {/* Company info */}
                <div className="pt-4 border-t border-stone-200 dark:border-stone-700">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-stone-800 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-700 dark:text-primary-400 hover:underline font-semibold inline-flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-primary-700 dark:text-primary-400 font-semibold">
                            {exp.company}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-stone-500 dark:text-stone-400 shrink-0">
                      <span className="font-medium">{exp.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
