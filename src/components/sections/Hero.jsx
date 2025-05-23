import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/DISSIDIA-986',
      color: 'bg-gray-800 hover:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/yupo-niu/',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:yupoca24@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
  ];

  return (
    <section id="hero" className="flex items-center bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="lg:w-7/12" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              <span className="text-primary-600">Hello,</span> I'm Yupo (Jason) Niu
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-6"
              variants={itemVariants}
            >
               Full Stack Developer & Data Analyst
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              With 17 years of experience in enterprise-level Java application development 
              and a strong foundation in data analytics. I specialize in high-performance 
              systems, microservices architecture, and turning data into actionable insights.
            </motion.p>
            
            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4 mb-8" variants={itemVariants}>
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
              >
                View My Work
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${link.color} text-white flex items-center justify-center transition-all duration-300`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            className="lg:w-5/12 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative rounded-full overflow-hidden border-4 border-primary-200 shadow-xl w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/avatar.pic.jpg"
                alt="Yupo (Jason) Niu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;