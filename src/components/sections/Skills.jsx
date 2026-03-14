import React, { useState } from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills';
import { FaServer, FaCloud, FaRobot, FaDesktop, FaLanguage } from 'react-icons/fa';

const Skills = () => {
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
    ai: <FaRobot className="w-6 h-6" />,
    frontend: <FaDesktop className="w-6 h-6" />,
    cloud: <FaCloud className="w-6 h-6" />,
    languages: <FaLanguage className="w-6 h-6" />,
  };

  // Category styles with explicit Tailwind classes (required for JIT detection)
  const categoryStyles = {
    backend: { bar: 'bg-primary-500', btn: 'bg-primary-600' },
    ai: { bar: 'bg-purple-500', btn: 'bg-purple-600' },
    frontend: { bar: 'bg-blue-500', btn: 'bg-blue-600' },
    cloud: { bar: 'bg-accent-500', btn: 'bg-accent-600' },
    languages: { bar: 'bg-green-500', btn: 'bg-green-600' },
  };

  // Function to render skill progress bar
  const SkillBar = ({ name, level, barClass }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${barClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 md:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My technical expertise spans backend development, AI/ML, cloud architecture, and more.
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
                    ? `${categoryStyles[category].btn} text-white shadow-md`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{categoryIcons[category]}</span>
                {skills[category].title}
              </button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div 
            className="bg-gray-800 rounded-lg shadow-md p-8"
            variants={itemVariants}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              {skills[activeCategory].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {skills[activeCategory].skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  barClass={categoryStyles[activeCategory].bar}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional Skills Statement */}
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-lg text-gray-400">
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