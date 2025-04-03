import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import experiences from '../../data/experiences';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeExperience, setActiveExperience] = useState(1);

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

  const selectedExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey spanning 17 years in software development and data analytics.
            </p>
          </motion.div>

          {/* Experience Tabs + Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs - Company Selection */}
            <motion.div className="lg:w-1/3" variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    className={`w-full text-left p-4 border-l-4 transition-all duration-300 ${
                      activeExperience === exp.id
                        ? 'border-l-primary-600 bg-primary-50'
                        : 'border-l-transparent hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveExperience(exp.id)}
                  >
                    <h3 className={`font-bold text-lg ${
                      activeExperience === exp.id ? 'text-primary-600' : 'text-gray-800'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-gray-600">{exp.position}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Selected Experience Details */}
            <motion.div 
              className="lg:w-2/3"
              variants={itemVariants}
              key={selectedExperience.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedExperience.position}</h3>
                  <div className="flex flex-wrap items-center text-gray-600 mb-4">
                    <span className="flex items-center mr-6 mb-2">
                      <FaCalendarAlt className="mr-2 text-primary-500" />
                      {selectedExperience.period}
                    </span>
                    <span className="flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2 text-primary-500" />
                      {selectedExperience.location}
                    </span>
                  </div>
                  
                  {selectedExperience.url && (
                    <a 
                      href={selectedExperience.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
                    >
                      <span className="mr-1">Visit {selectedExperience.company}</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                  
                  <p className="text-gray-600 mb-6">
                    {selectedExperience.description}
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities & Achievements</h4>
                <div className="space-y-4 mb-6">
                  {selectedExperience.responsibilities.map((resp, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent-500">
                      <h5 className="font-bold text-gray-800 mb-1">{resp.title}</h5>
                      <p className="text-gray-600">{resp.details}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;