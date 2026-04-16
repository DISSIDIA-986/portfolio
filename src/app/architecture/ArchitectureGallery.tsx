"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import DiagramLightbox from "@/components/ui/DiagramLightbox";
import projectDiagrams from "@/data/diagrams";
import type { ProjectDiagram } from "@/data/diagrams";
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

export default function ArchitectureGallery() {
  const [activeLightbox, setActiveLightbox] = useState<{
    diagrams: ProjectDiagram[];
    slug: string;
  } | null>(null);

  return (
    <section className="pt-24 pb-16 min-h-screen bg-stone-50 dark:bg-stone-900">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </a>
            <h1 className="font-heading text-4xl md:text-5xl text-stone-900 dark:text-white mb-4">
              Technical Architecture
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
              System and product architecture diagrams from select projects.
              Each diagram tells a story about how I design systems — from
              multi-agent orchestration to security infrastructure.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDiagrams.map((pd, idx) => {
              const project = projects.find((p) => p.id === pd.projectId);
              if (!project) return null;

              return (
                <motion.div
                  key={pd.projectId}
                  variants={itemVariants}
                  className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50 overflow-hidden"
                >
                  {/* Project Header */}
                  <div className="p-6 pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="text-lg font-bold text-stone-800 dark:text-white">
                        {project.title}
                      </h2>
                      <span className="shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 italic">
                      {pd.insight}
                    </p>
                  </div>

                  {/* Diagram Thumbnails */}
                  <div className="grid grid-cols-2 gap-3 px-6 pb-6">
                    {pd.diagrams.map((diagram) => (
                      <button
                        key={diagram.type}
                        type="button"
                        onClick={() =>
                          setActiveLightbox({
                            diagrams: pd.diagrams,
                            slug: pd.projectSlug,
                          })
                        }
                        className="group relative rounded-lg overflow-hidden border border-stone-200 dark:border-stone-600 hover:border-primary-400 dark:hover:border-primary-500 transition-colors cursor-zoom-in"
                      >
                        <div className="relative w-full aspect-[8/5] bg-stone-100 dark:bg-stone-700">
                          <Image
                            src={diagram.pngUrl}
                            alt={`${project.title} — ${diagram.label}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 45vw, 22vw"
                            priority={idx < 2}
                          />
                        </div>
                        <div className="px-2 py-1.5 text-xs text-stone-500 dark:text-stone-400 text-center bg-stone-50 dark:bg-stone-800">
                          {diagram.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      {/* Single lightbox instance */}
      {activeLightbox && (
        <DiagramLightbox
          open={!!activeLightbox}
          onClose={() => setActiveLightbox(null)}
          diagrams={activeLightbox.diagrams}
          projectSlug={activeLightbox.slug}
        />
      )}
    </section>
  );
}
