"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

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

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: SOCIAL_LINKS.email,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "DISSIDIA-986",
    href: SOCIAL_LINKS.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yupo-niu",
    href: SOCIAL_LINKS.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900"
    >
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
              title="Get in Touch"
              subtitle="Open to new opportunities, collaborations, and interesting conversations about technology."
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-600 transition-all">
                  <Icon className="w-5 h-5 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
