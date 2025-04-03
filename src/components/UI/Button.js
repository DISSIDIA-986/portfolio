import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  href,
  target,
  rel,
}) => {
  // Variant styles
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    'outline-secondary': 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white focus:ring-secondary-500',
    'outline-accent': 'border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white focus:ring-accent-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    link: 'bg-transparent text-primary-600 hover:text-primary-700 hover:underline p-0 focus:ring-0',
  }[variant] || 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500';

  // Size styles
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl',
  }[size] || 'px-4 py-2 text-base';

  // Common classes
  const commonClasses = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-70 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses}
    ${variantClasses}
    ${className}
  `;

  // Render as an anchor if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={commonClasses}
        onClick={onClick}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={commonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;