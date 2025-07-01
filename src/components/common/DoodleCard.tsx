import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';

interface DoodleCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'wiggle' | 'bounce' | 'none';
  onClick?: () => void;
  variant?: 'default' | 'colorful' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'auto';
}

const DoodleCard = forwardRef<HTMLDivElement, DoodleCardProps>(({
  children,
  className = '',
  hoverEffect = 'lift',
  onClick,
  variant = 'default',
  size = 'medium'
}, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const cardRef = ref || internalRef;

  const getVariantClasses = () => {
    switch (variant) {
      case 'colorful':
        return 'bg-gradient-to-br from-gray-200/50 via-gray-300/50 to-gray-400/50 dark:from-gray-700/50 dark:via-gray-600/50 dark:to-gray-500/50 border-gray-300 dark:border-gray-600';
      case 'outlined':
        return 'bg-transparent border-2 border-gray-700 dark:border-gray-500';
      case 'default':
      default:
        return 'bg-white/90 dark:bg-gray-800/90 border-2 border-gray-300 dark:border-gray-600';
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
    const card = (cardRef as React.RefObject<HTMLDivElement>).current;
    if (!card || hoverEffect === 'none') return;

    gsap.set(card, { force3D: true });

    const handleMouseEnter = () => {
      switch (hoverEffect) {
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
  }, [hoverEffect, onClick, cardRef]);

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
});

DoodleCard.displayName = 'DoodleCard';

export default DoodleCard;