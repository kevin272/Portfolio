import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface DoodleCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'wiggle' | 'bounce' | 'none';
  onClick?: () => void;
  variant?: 'default' | 'colorful' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'auto';
}

const DoodleCard: React.FC<DoodleCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  onClick,
  variant = 'default',
  size = 'medium'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const getVariantClasses = () => {
    switch (variant) {
      case 'colorful':
        return 'bg-gradient-to-br from-doodle-yellow via-doodle-pink to-doodle-purple border-doodle-ink dark:border-white';
      case 'outlined':
        return 'bg-transparent border-2 border-doodle-ink dark:border-white';
      case 'default':
      default:
        return 'bg-doodle-paper dark:bg-doodle-paper-dark border-2 border-doodle-ink dark:border-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'doodle-card-small';
      case 'medium':
        return 'doodle-card-medium';
      case 'large':
        return 'doodle-card-large';
      case 'wide':
        return 'doodle-card-wide';
      case 'tall':
        return 'doodle-card-tall';
      case 'auto':
      default:
        return 'doodle-card-medium';
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card || hoverEffect === 'none') return;

    // Optimize GSAP for better performance
    gsap.set(card, { force3D: true });

    const handleMouseEnter = () => {
      switch (hoverEffect) {
        case 'lift':
          // Already handled by CSS for better performance
          break;
        case 'wiggle':
          gsap.to(card, {
            rotation: 2,
            duration: 0.15,
            yoyo: true,
            repeat: 3,
            ease: 'power2.inOut'
          });
          break;
        case 'bounce':
          gsap.to(card, {
            scale: 1.03,
            duration: 0.2,
            ease: 'bounce.out'
          });
          break;
      }
    };

    const handleMouseLeave = () => {
      if (hoverEffect === 'bounce') {
        gsap.to(card, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = () => {
      if (onClick) {
        gsap.to(card, {
          scale: 0.97,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut',
          onComplete: onClick
        });
      }
    };

    // Only add event listeners for effects that need JavaScript
    if (hoverEffect === 'wiggle' || hoverEffect === 'bounce') {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    if (onClick) {
      card.addEventListener('click', handleClick);
    }

    return () => {
      if (hoverEffect === 'wiggle' || hoverEffect === 'bounce') {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (onClick) {
        card.removeEventListener('click', handleClick);
      }
    };
  }, [hoverEffect, onClick]);

  return (
    <div
      ref={cardRef}
      className={`
        doodle-card
        ${getVariantClasses()}
        ${getSizeClasses()}
        shadow-doodle dark:shadow-doodle-dark
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default DoodleCard;