import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const TimelineItem = ({ 
  title, 
  subtitle,
  date,
  icon,
  isLast = false,
  children,
  iconBackground = 'bg-primary-600',
  lineColor = 'border-gray-200'
}) => {
  return (
    <motion.div 
      className={`timeline-item relative pl-8 pb-10 ${isLast ? 'border-l-0 last:pb-0' : `border-l-2 ${lineColor}`}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={`timeline-dot absolute -left-[9px] w-4 h-4 rounded-full ${iconBackground} flex items-center justify-center`}>
        {icon && <span className="text-white text-xs">{icon}</span>}
      </div>
      <div>
        {date && <span className="text-sm text-gray-500 mb-1 block">{date}</span>}
        {title && <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>}
        {subtitle && <h5 className="text-gray-600 mb-3">{subtitle}</h5>}
        <div className="text-gray-600">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;