import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/DISSIDIA-986', ariaLabel: 'GitHub' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/yupo-niu-3a0200324/', ariaLabel: 'LinkedIn' },
    { icon: <FaEnvelope className="w-5 h-5" />, href: 'mailto:yupoca24@gmail.com', ariaLabel: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Yupo (Jason) Niu</h2>
            <p className="text-gray-400">Senior Java Developer & Data Analyst</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Yupo (Jason) Niu. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Built with React & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;