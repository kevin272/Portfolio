import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface DoodleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const DoodleButton: React.FC<DoodleButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left'
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-doodle-green text-doodle-ink dark:text-white border-doodle-ink dark:border-white hover:bg-doodle-green-light';
      case 'outline':
        return 'bg-transparent border-2 border-doodle-ink dark:border-white text-doodle-ink dark:text-white hover:bg-doodle-ink hover:text-doodle-paper dark:hover:bg-white dark:hover:text-doodle-paper-dark';
      case 'primary':
      default:
        return 'bg-doodle-blue text-white border-doodle-ink dark:border-white hover:bg-doodle-blue-light';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'md':
      default:
        return 'px-6 py-3 text-base';
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || disabled) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        rotation: Math.random() * 4 - 2,
        y: -3,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    const handleClick = () => {
      gsap.to(button, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [disabled]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        border-2 font-bold flex items-center justify-center space-x-2
        shadow-doodle dark:shadow-doodle-dark hover:shadow-doodle-hover dark:hover:shadow-doodle-dark-hover
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        font-doodle
        ${className}
      `}
      style={{
        borderRadius: '50% 20% 40% 30% / 30% 40% 60% 70%',
        transform: `rotate(${Math.random() * 2 - 1}deg)`
      }}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export default DoodleButton;