import React from 'react';

const Card = ({ 
  className = '', 
  children,
  onClick,
  hoverable = false,
  shadow = 'md'
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }[shadow] || 'shadow-md';

  const hoverClasses = hoverable 
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' 
    : '';

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden ${shadowClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className = '', children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ className = '', children }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ className = '', children }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;