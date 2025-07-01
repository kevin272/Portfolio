import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fadeUp' | 'splitChars' | 'typewriter';
  delay?: number;
  stagger?: number;
  trigger?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  stagger = 0.05,
  trigger
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    let tl = gsap.timeline({ delay });

    switch (animation) {
      case 'splitChars':
        element.innerHTML = text.split('').map(char => 
          char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('');
        
        gsap.set(element.querySelectorAll('.char'), { y: 100, opacity: 0, rotationX: 90 });
        
        tl.to(element.querySelectorAll('.char'), {
          duration: 0.8,
          y: 0,
          opacity: 1,
          rotationX: 0,
          ease: 'back.out(1.7)',
          stagger
        });
        break;

      case 'typewriter':
        gsap.to(element, {
          duration: text.length * 0.1,
          text: text,
          ease: "none",
          delay
        });
        break;

      case 'fadeUp':
      default:
        gsap.set(element, { y: 50, opacity: 0 });
        tl.to(element, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'power2.out'
        });
        break;
    }

    if (trigger) {
      gsap.set(element, { opacity: 0 });
      gsap.fromTo(element, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trigger,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [text, animation, delay, stagger, trigger]);

  return React.createElement(
    'span',
    { ref: textRef, className },
    text
  );
};

export default AnimatedText;