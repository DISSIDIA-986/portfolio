import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitResult, setSubmitResult] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear previous results when user starts typing
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  // Simple mailto function
  const openMailto = () => {
    // Validate required fields
    if (!formState.name.trim()) {
      setSubmitResult({
        success: false,
        message: 'Please enter your name.'
      });
      return;
    }

    if (!formState.email.trim()) {
      setSubmitResult({
        success: false,
        message: 'Please enter your email address.'
      });
      return;
    }

    if (!formState.message.trim()) {
      setSubmitResult({
        success: false,
        message: 'Please enter your message.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitResult({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Build mailto URL
    const subject = encodeURIComponent(
      formState.subject.trim() || 'Contact from Portfolio Website'
    );
    
    const body = encodeURIComponent(
      `Hi Yupo,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n\nContact Email: ${formState.email}`
    );
    
    const mailtoUrl = `mailto:yupoca24@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoUrl, '_blank');
    
    // Show success message
    setSubmitResult({
      success: true,
      message: 'Email client opened! Please send the email from your default email application.'
    });

    // Clear form after successful mailto
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitResult(null);
    }, 5000); // Clear after 5 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openMailto();
  };

  // Quick mailto with pre-filled subject
  const handleQuickEmail = (subject = '') => {
    const mailtoUrl = `mailto:yupoca24@gmail.com${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
    window.open(mailtoUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary-500" />,
      title: 'Email',
      value: 'yupoca24@gmail.com',
      link: 'mailto:yupoca24@gmail.com'
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-primary-500" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yupo-niu',
      link: 'https://www.linkedin.com/in/yupo-niu/'
    },
    {
      icon: <FaGithub className="w-6 h-6 text-primary-500" />,
      title: 'GitHub',
      value: 'github.com/DISSIDIA-986',
      link: 'https://github.com/DISSIDIA-986'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary-500" />,
      title: 'Location',
      value: 'Calgary, Alberta, Canada',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div className="lg:w-5/12" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Let's Connect</h3>
                <p className="text-gray-600 mb-6">
                  I'm currently exploring new opportunities in software development and data analytics. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                
                {/* Quick Contact Options */}
                <div className="space-y-4 mb-6">
                  <button
                    onClick={() => handleQuickEmail('Job Opportunity Inquiry')}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <FaEnvelope className="w-4 h-4 text-primary-500 mr-3" />
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-primary-700">Job Opportunities</div>
                        <div className="text-sm text-gray-500">Discuss career opportunities</div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleQuickEmail('Project Collaboration')}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <FaPaperPlane className="w-4 h-4 text-primary-500 mr-3" />
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-primary-700">Collaboration</div>
                        <div className="text-sm text-gray-500">Let's work on something together</div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleQuickEmail('General Inquiry')}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <FaEnvelope className="w-4 h-4 text-primary-500 mr-3" />
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-primary-700">Say Hello</div>
                        <div className="text-sm text-gray-500">Just want to connect and chat</div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yupo-niu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/DISSIDIA-986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <button
                    onClick={() => handleQuickEmail()}
                    className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-primary-700 hover:scale-110"
                    aria-label="Send Email"
                    title="Send Email"
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:w-7/12" variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
                
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <strong>How it works:</strong> Fill out the form below and click "Open Email Client". 
                      Your default email application will open with the message pre-filled. Then just hit send!
                    </div>
                  </div>
                </div>
                
                {submitResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      submitResult.success 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitResult.success ? (
                      <FaPaperPlane className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FaEnvelope className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{submitResult.message}</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
                      placeholder="Tell me about your project, question, or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Open Email Client
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Prefer direct email? Send me a message at{' '}
                    <a 
                      href="mailto:yupoca24@gmail.com" 
                      className="text-primary-600 hover:text-primary-800 font-medium"
                    >
                      yupoca24@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;