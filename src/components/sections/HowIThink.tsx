"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TerminalBlock from "@/components/ui/TerminalBlock";
import { AVATAR_URL, RESUME_URL } from "@/lib/constants";

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

const methodologySteps = [
  {
    command: 'think --embrace "unfamiliar problem"',
    output:
      "I never shy away. The unfamiliar ones teach the most.",
  },
  {
    command: "think --decompose",
    output:
      "Break it into pieces. The biggest problems are always made of smaller, solvable ones.",
  },
  {
    command: "think --research --sources github,x,ai-curriculum",
    output:
      "Custom AI learning curricula to rapidly acquire domain knowledge I don't yet have.",
  },
  {
    command: "think --build --mode ai-augmented",
    output:
      "Voice-driven workflow, custom toolchain, rapid iteration. Ship fast, refine faster.",
  },
  {
    command: "think --validate",
    output: "Measure, test, learn. The loop never ends.",
  },
];

export default function HowIThink() {
  return (
    <section
      id="how-i-think"
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
              title="How I Think"
              subtitle="I don't avoid hard problems — I run toward them. Here's the methodology I've built over 17 years."
            />
          </motion.div>

          {/* Terminal Methodology Block */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
            role="img"
            aria-label="My problem-solving methodology: embrace unfamiliar problems, decompose into solvable pieces, research using AI and open source, build with AI-augmented workflow, validate through measurement"
          >
            <TerminalBlock title="~/methodology">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.3 }}
                  className="mb-3 last:mb-0"
                >
                  <div className="flex gap-2">
                    <span className="text-green-400 shrink-0">$</span>
                    <span className="text-white">{step.command}</span>
                  </div>
                  <div className="text-accent-400 ml-4 mt-0.5">
                    → {step.output}
                  </div>
                </motion.div>
              ))}
            </TerminalBlock>
          </motion.div>

          {/* Centered Avatar Break */}
          <motion.div
            className="flex flex-col items-center mb-10"
            variants={itemVariants}
          >
            <div className="relative rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-700 shadow-xl w-32 h-32 mb-4">
              <Image
                src={AVATAR_URL}
                alt="Yupo (Jason) Niu"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <h3 className="text-xl font-bold text-stone-800 dark:text-white">
              Yupo (Jason) Niu
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              AI Engineer · Calgary, Canada
            </p>
          </motion.div>

          {/* Bio Paragraphs */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4 mb-10"
            variants={itemVariants}
          >
            <p className="text-stone-600 dark:text-stone-300">
              <span className="font-semibold text-stone-800 dark:text-white">
                Who I am:
              </span>{" "}
              I&apos;m Jason — a developer who&apos;s spent 17 years building
              enterprise systems in China and now Canada. I led teams at
              Edianyun (HKEX-listed, 8 years), built blockchain systems at
              Bitmain, and recently graduated from SAIT with a 4.0 GPA in Data
              Analytics and Integrated AI. As VP Education in my Toastmasters
              club, I bridge the gap between engineering thinking and clear
              communication.
            </p>
            <p className="text-stone-600 dark:text-stone-300">
              <span className="font-semibold text-stone-800 dark:text-white">
                What drives me:
              </span>{" "}
              I&apos;m genuinely curious about how things work — and how they
              could work better. I don&apos;t just use AI to code faster. I use
              it to learn faster, think differently, and explore problems I
              couldn&apos;t have tackled alone.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#experience" className="btn btn-primary">
                View Experience
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
