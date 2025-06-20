import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { FaMicrophone, FaUsers, FaTrophy } from 'react-icons/fa';

const Toastmasters = () => {
  const { ref, controls } = useScrollAnimation();

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

  const images = [
    {
      src: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/toastmasters/contest.jpg",
      alt: "Toastmasters Contest",
      title: "2025 International Speech Contest",
      description: "Participating in the Toastmasters International Contest in March 2025.",
      icon: <FaTrophy className="w-8 h-8 text-yellow-500" />,
    },
    {
      src: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/toastmasters/group.jpg",
      alt: "Toastmasters Group",
      title: "Calgary Toastmasters Club",
      description: "Our diverse and supportive community of public speakers and leaders.",
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
    },
  ];

  const skills = [
    "Public Speaking",
    "Leadership",
    "Impromptu Speaking",
    "Speech Preparation",
    "Constructive Feedback",
    "Active Listening",
    "Meeting Management",
    "Educational Programming",
    "Member Mentoring",
  ];

  return (
    <section id="toastmasters" className="py-20 bg-gradient-to-br from-primary-50 to-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Toastmasters Journey</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhancing my communication and leadership skills through Toastmasters International.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-800 rounded-full mb-6">
              <FaMicrophone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Level 3 Toastmasters Member & VP Education</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I joined Toastmasters in September 2024 to improve my public speaking skills and build confidence
              in professional communication. Recently upgraded to Level 3 and now serving as VP Education, 
              where I help organize educational programs and mentor new members. Through regular speeches 
              and leadership roles, I'm developing valuable soft skills that complement my technical expertise.
            </p>
          </motion.div>

          {/* Images Gallery */}
          <motion.div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg bg-white"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative h-64">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {image.icon}
                    <h4 className="text-xl font-bold ml-3 text-gray-800">{image.title}</h4>
                  </div>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Developed */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Skills Developed</h3>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-full shadow-md px-6 py-3 m-2"
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-gray-600 mb-6">
              My Toastmasters experience helps me communicate technical concepts clearly and confidently
              to both technical and non-technical audiences – a valuable skill in software development and data analysis.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Toastmasters;