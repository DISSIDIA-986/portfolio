import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import certifications from '../../data/certifications';
import { FaAward, FaCalendarAlt } from 'react-icons/fa';

const Certifications = () => {
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
  const categories = ['all', ...new Set(certifications.map(cert => cert.category))];

  // Filter certifications
  const filteredCertifications = filter === 'all' 
    ? certifications
    : certifications.filter(cert => cert.category === filter);

  return (
    <section id="certifications" className="py-20 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications and credentials that validate my expertise.
            </p>
          </motion.div>

          {/* Certification Filters */}
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

          {/* Certifications Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredCertifications.map((certification) => (
              <motion.div
                key={certification.id}
                className="card overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Certificate Image/Badge */}
                <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
                  {certification.imageUrl ? (
                    <img 
                      src={certification.imageUrl}
                      alt={certification.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <FaAward className="w-24 h-24 text-primary-200" />
                  )}
                </div>
                
                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-primary-500 mr-2" />
                    <span className="text-gray-500 text-sm">{certification.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{certification.title}</h3>
                  <p className="text-gray-600 mb-4">{certification.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {certification.issuer}
                    </span>
                    
                    {certification.featured && (
                      <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Continuing Education */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I'm committed to ongoing professional development. Currently pursuing AI integration coursework at SAIT (2025-2026) 
              and continuously expanding my data analytics expertise.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;