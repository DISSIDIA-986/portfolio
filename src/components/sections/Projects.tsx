"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageLightbox from "@/components/ui/ImageLightbox";
import projects from "@/data/projects";

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

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-12 md:py-16 bg-stone-100 dark:bg-stone-800"
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
              title="Projects"
              subtitle="Every project started with a question I couldn't leave alone."
            />
          </motion.div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50 overflow-hidden hover:shadow-lg transition-all"
              >
                {project.imageUrl && (
                  <div className="relative w-full h-40 bg-stone-100 dark:bg-stone-700">
                    <ImageLightbox
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  {project.challenge && (
                    <p className="text-sm italic text-accent-700 dark:text-accent-400 mb-3">
                      {project.challenge}
                    </p>
                  )}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-stone-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {other.length > 0 && (
            <>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-bold mb-6 text-stone-800 dark:text-white"
              >
                More Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {other.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50 hover:shadow-md transition-shadow overflow-hidden"
                  >
                    {project.imageUrl && (
                      <div className="relative w-full h-28 bg-stone-100 dark:bg-stone-700">
                        <ImageLightbox
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-stone-800 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="shrink-0 px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-stone-100 text-stone-500 dark:bg-stone-700 dark:text-stone-400">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-[10px] rounded-full bg-stone-100 text-stone-500 dark:bg-stone-700 dark:text-stone-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-stone-100 text-stone-500 dark:bg-stone-700 dark:text-stone-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
