"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Server, Code, Database, BarChart3, Cloud } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
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

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture & DevOps",
    description:
      "Led microservices migration, optimized CI/CD pipelines, improved deployment efficiency by 50%.",
  },
  {
    icon: Code,
    title: "High-Performance Systems",
    description:
      "Designed and implemented core risk control, e-commerce, and auction platforms handling 5K+ daily risk evaluations & 10K+ concurrent transactions.",
  },
  {
    icon: Database,
    title: "Database Optimization",
    description:
      "Expertise in MySQL, Redis, and NoSQL database optimization, query tuning, and caching strategies.",
  },
  {
    icon: BarChart3,
    title: "Data & AI",
    description:
      "Proficient in Python, Power BI, Tableau, with experience in Predictive Analysis & Business Intelligence. Active builder of AI-augmented development tools.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Experience with Alibaba Cloud, GCP, and AWS, containerization with Docker and Kubernetes.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              title="About Me"
              subtitle="A seasoned software developer with a passion for building scalable systems, analyzing data, and leveraging AI to ship faster."
            />
          </motion.div>

          {/* Avatar + Personal Info */}
          <motion.div
            className="flex flex-col lg:flex-row gap-12 mb-12 md:mb-16"
            variants={itemVariants}
          >
            <div className="lg:w-5/12">
              {/* Avatar */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-700 shadow-xl w-48 h-48 md:w-56 md:h-56">
                  <Image
                    src={AVATAR_URL}
                    alt="Yupo (Jason) Niu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Professional Summary
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I&apos;m a seasoned software developer with 17 years of experience
                specializing in enterprise-level Java application development and
                system architecture design. I&apos;ve led microservices architecture
                transformation, risk control engine design, and high-concurrency
                transaction system development, with additional capabilities in
                data analytics and AI integration.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Currently based in Calgary, Canada, I graduated from SAIT in
                April 2026 with Post-Diplomas in Data Analytics and Integrated
                AI, adding expertise in data analytics, visualization, and
                machine learning to my strong foundation in software development.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                As VP Education in my Toastmasters club, I&apos;ve honed leadership
                and communication skills that complement my technical expertise
                — bridging the gap between engineering teams and business
                stakeholders.
              </p>
            </div>

            <div className="lg:w-7/12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Career Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-600 bg-gray-50 dark:bg-gray-800/50"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="mt-1">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in my professional journey? Check out my experience or
              download my resume.
            </p>
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
