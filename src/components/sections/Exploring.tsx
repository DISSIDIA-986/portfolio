"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const exploringTags = [
  "Prompt Engineering",
  "AI Development Workflows",
  "Custom AI Curricula",
  "Open Source Trends",
  "Agentic AI",
];

export default function Exploring() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-stone-900">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              title="What I'm Exploring"
              subtitle="I design custom AI learning curricula to keep up with a world that changes every week."
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-stone-600 dark:text-stone-300 mb-6 text-center"
          >
            I track GitHub trending, follow AI research on X, and build custom
            learning paths to rapidly acquire domain knowledge in areas I
            haven&apos;t mastered yet. These are the threads I&apos;m currently
            pulling on:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {exploringTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
