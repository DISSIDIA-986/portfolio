import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import certificationsData from '../../data/certifications';
import { FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  // 确保使用导入的数据
  const allCertifications = certificationsData || [];

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

  // Get unique categories with error handling
  const categories = useMemo(() => {
    if (!allCertifications || allCertifications.length === 0) {
      return ['all'];
    }
    const uniqueCategories = [...new Set(allCertifications.map(cert => cert.category).filter(Boolean))];
    return ['all', ...uniqueCategories];
  }, [allCertifications]);

  // Filter certifications with useMemo for performance
  const filteredCertifications = useMemo(() => {
    if (!allCertifications || allCertifications.length === 0) {
      return [];
    }
    
    if (activeFilter === 'all') {
      return allCertifications;
    }
    
    return allCertifications.filter(cert => cert.category === activeFilter);
  }, [allCertifications, activeFilter]);

  // Handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Format category name for display
  const formatCategoryName = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <section id="certifications" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="mb-12 md:mb-16 text-center" variants={itemVariants}>
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
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-102'
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            layout
          >
            {filteredCertifications.map((certification) => (
              <motion.div
                key={certification.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Certificate Image/Badge */}
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
                  {certification.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  {certification.imageUrl ? (
                    <img 
                      src={certification.imageUrl}
                      alt={certification.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // 图片加载失败时显示默认图标
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{display: certification.imageUrl ? 'none' : 'flex'}}
                  >
                    <FaAward className="w-20 h-20 text-primary-300" />
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <FaCalendarAlt className="text-primary-500 mr-2 w-4 h-4" />
                    <span className="text-gray-500 text-sm">{certification.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {certification.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {certification.description}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {certification.issuer}
                    </span>
                    
                    {certification.credentialUrl && (
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        View Credential
                      </a>
                    )}
                  </div>
                  
                  {/* Skills/Technologies */}
                  {certification.skills && certification.skills.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {certification.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {certification.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{certification.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Certifications Message */}
          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaAward className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No certifications found in this category.
              </p>
            </motion.div>
          )}

          {/* Continuing Education */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm committed to ongoing professional development. Currently pursuing AI integration coursework at SAIT (2025-2026) 
              and continuously expanding my data analytics expertise through hands-on projects and industry certifications.
            </p>
            
            {/* Learning Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{allCertifications.length}+</div>
                <div className="text-gray-600">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{categories.length - 1}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">17+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;