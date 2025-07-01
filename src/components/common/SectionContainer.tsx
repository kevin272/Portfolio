import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'gradient' | 'image';
  backgroundImage?: string;
  overlay?: boolean;
  overlayColor?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
  background = 'default',
  backgroundImage,
  overlay = false,
  overlayColor = 'from-dark-900/80 to-dark-800/60'
}) => {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-br from-dark-800/50 to-dark-900/50';
      case 'image':
        return '';
      case 'default':
      default:
        return '';
    }
  };

  return (
    <section 
      id={id}
      className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
    >
      {background === 'image' && backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {overlay && (
            <div className={`absolute inset-0 bg-gradient-to-br ${overlayColor}`}></div>
          )}
        </div>
      )}
      
      {background === 'gradient' && (
        <div className={`absolute inset-0 ${getBackgroundClasses()}`}></div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;