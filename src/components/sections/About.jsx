import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { FaCode, FaServer, FaDatabase, FaChartBar, FaCloud } from 'react-icons/fa';

const About = () => {
  const { ref, controls } = useScrollAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: <FaServer className="w-6 h-6 text-primary-500" />,
      title: 'Backend Architecture & DevOps',
      description:
        'Led microservices migration, optimized CI/CD pipelines, improved deployment efficiency by 50%.',
    },
    {
      icon: <FaCode className="w-6 h-6 text-primary-500" />,
      title: 'High-Performance Systems',
      description:
        'Designed and implemented core risk control, e-commerce, and auction platforms handling 5K+ daily risk evaluations & 10K+ concurrent transactions.',
    },
    {
      icon: <FaDatabase className="w-6 h-6 text-primary-500" />,
      title: 'Database Optimization',
      description:
        'Expertise in MySQL, Redis, and NoSQL database optimization, query tuning, and caching strategies.',
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-primary-500" />,
      title: 'Data & AI',
      description:
        'Proficient in Python, Power BI, Tableau, with experience in Predictive Analysis & Business Intelligence.',
    },
    {
      icon: <FaCloud className="w-6 h-6 text-primary-500" />,
      title: 'Cloud Computing',
      description:
        'Experience with Alibaba Cloud and AWS, containerization with Docker and Kubernetes.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="mb-16 text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seasoned software engineer with a passion for building scalable systems and analyzing data.
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div className="flex flex-col lg:flex-row gap-12 mb-16" variants={itemVariants}>
            <div className="lg:w-5/12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Summary</h3>
              <p className="mb-4 text-gray-600">
                I'm a seasoned software engineer with 17 years of experience specializing in enterprise-level Java application 
                development and system architecture design. I've led microservices architecture transformation, risk control engine 
                design, and high-concurrency transaction system development, with additional capabilities in data analytics and AI integration.
              </p>
              <p className="mb-4 text-gray-600">
                Currently based in Calgary, Canada, I'm pursuing a Post-Diploma in Data Analytics & Software Development at SAIT, expanding 
                my expertise in data analytics, visualization, and machine learning while continuing to build on my strong foundation in software development.
              </p>
              <p className="text-gray-600">
                I'm passionate about solving complex problems and creating efficient, scalable solutions that drive business success.
              </p>
            </div>
            
            <div className="lg:w-7/12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Career Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-primary-200 bg-gray-50"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mt-1">{highlight.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-lg text-gray-600 mb-6">
              Interested in my professional journey? Check out my experience or download my resume.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#experience" className="btn btn-primary">
                View Experience
              </a>
              <a
                href="/path-to-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;