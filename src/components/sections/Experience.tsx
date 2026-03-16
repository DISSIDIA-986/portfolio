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
      className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900"
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
              subtitle="17 years of building enterprise systems, leading teams, and shipping products."
            />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500 dark:text-gray-400 shrink-0">
                    <span className="font-medium">{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        {resp.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {resp.details}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
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
