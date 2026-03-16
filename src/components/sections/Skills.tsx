"use client";

import { motion } from "framer-motion";
import { Server, Brain, Monitor, Cloud, Languages } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import skills from "@/data/skills";
import type { SkillCategory } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const categoryIcons: Record<string, React.ElementType> = {
  backend: Server,
  ai: Brain,
  frontend: Monitor,
  cloud: Cloud,
  languages: Languages,
};

function getTier(level: number): { label: string; color: string } {
  if (level >= 85)
    return {
      label: "Expert",
      color:
        "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
    };
  if (level >= 70)
    return {
      label: "Proficient",
      color:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    };
  return {
    label: "Capable",
    color:
      "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  };
}

function CategoryCard({
  categoryKey,
  category,
}: {
  categoryKey: string;
  category: SkillCategory;
}) {
  const Icon = categoryIcons[categoryKey] || Server;

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-primary-500" />
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="space-y-2">
        {category.skills.map((skill) => {
          const tier = getTier(skill.level);
          return (
            <div
              key={skill.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span
                className={`shrink-0 px-2 py-0.5 text-xs font-medium rounded-full ${tier.color}`}
              >
                {tier.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = Object.entries(skills) as [string, SkillCategory][];

  return (
    <section
      id="skills"
      className="py-12 md:py-16 bg-white dark:bg-gray-950"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              title="Skills"
              subtitle="Technical expertise across the full stack, from backend systems to AI and cloud infrastructure."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map(([key, category]) => (
              <CategoryCard key={key} categoryKey={key} category={category} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
