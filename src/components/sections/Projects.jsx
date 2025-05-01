import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import projects from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const Projects = () => {
  const { ref, controls } = useScrollAnimation();
  const [filter, setFilter] = useState('all');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Filter projects
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="mb-16 text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of my work showcasing my skills in software development and data analysis.
            </p>
          </motion.div>

          {/* Project Filters */}
          <motion.div className="mb-12 flex flex-wrap justify-center gap-3" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl || "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 flex items-center">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary py-2 px-4 text-sm flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline py-2 px-4 text-sm flex items-center"
                      >
                        <FaGithub className="mr-2" />
                        Code
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-accent py-2 px-4 text-sm flex items-center"
                      >
                        <FaPlay className="mr-2" />
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Future Projects Placeholder */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Future Projects</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm constantly working on new projects. Check back soon for more updates, including flowcharts and mind maps 
              showcasing my work processes and system architectures.
            </p>
            <div className="inline-block p-6 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 italic">Placeholder for future project visualizations...</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;