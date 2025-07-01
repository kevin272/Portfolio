import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'from-primary-400 to-secondary-400',
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;