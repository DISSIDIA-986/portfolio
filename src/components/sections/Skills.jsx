import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import skills from '../../data/skills';
import { FaServer, FaCloud, FaChartBar, FaTerminal, FaLanguage } from 'react-icons/fa';

const Skills = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('backend');

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

  // Category icons
  const categoryIcons = {
    backend: <FaServer className="w-6 h-6" />,
    cloud: <FaCloud className="w-6 h-6" />,
    data: <FaChartBar className="w-6 h-6" />,
    linux: <FaTerminal className="w-6 h-6" />,
    languages: <FaLanguage className="w-6 h-6" />,
  };

  // Category colors
  const categoryColors = {
    backend: 'primary',
    cloud: 'accent',
    data: 'secondary',
    linux: 'gray',
    languages: 'blue',
  };

  // Function to render skill progress bar
  const SkillBar = ({ name, level, colorClass }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full bg-${colorClass}-500`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My technical expertise spans backend development, cloud architecture, data analysis, and more.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div className="mb-12 flex flex-wrap justify-center gap-4" variants={itemVariants}>
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-5 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? `bg-${categoryColors[category]}-600 text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{categoryIcons[category]}</span>
                {skills[category].title}
              </button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8"
            variants={itemVariants}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {skills[activeCategory].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {skills[activeCategory].skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  colorClass={categoryColors[activeCategory]}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional Skills Statement */}
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-lg text-gray-600">
              In addition to these core skills, I'm continuously learning and expanding my expertise in emerging technologies.
              Currently focusing on advanced data analysis techniques and AI integration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;