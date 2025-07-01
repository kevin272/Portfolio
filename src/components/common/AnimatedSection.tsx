import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  animation?: 'fadeUp' | 'slideIn' | 'scale' | 'chars';
  stagger?: number;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  animation = 'fadeUp',
  stagger = 0.1,
  delay = 0
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.config({ force3D: true });

    const elements = section.children;
    
    // Set initial states based on animation type
    switch (animation) {
      case 'chars':
        const title = section.querySelector('h1, h2, h3');
        if (title) {
          const text = title.textContent;
          if (text) {
            title.innerHTML = text.split('').map(char => 
              char === ' ' ? ' ' : `<span class="char">${char}</span>`
            ).join('');
            gsap.set(title.querySelectorAll('.char'), { y: 80, opacity: 0, rotationX: 90 });
          }
        }
        gsap.set(Array.from(elements).slice(1), { y: 60, opacity: 0 });
        break;
      case 'slideIn':
        gsap.set(elements, { x: -80, opacity: 0 });
        break;
      case 'scale':
        gsap.set(elements, { scale: 0.8, opacity: 0 });
        break;
      default:
        gsap.set(elements, { y: 60, opacity: 0 });
    }

    const tl = gsap.timeline({
      delay,
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate based on type
    switch (animation) {
      case 'chars':
        const title = section.querySelector('h1, h2, h3');
        if (title) {
          tl.to(title.querySelectorAll('.char'), {
            y: 0, opacity: 1, rotationX: 0,
            duration: 0.6, ease: 'back.out(1.7)', stagger: 0.03
          })
          .to(Array.from(elements).slice(1), {
            y: 0, opacity: 1,
            duration: 0.5, ease: 'power2.out', stagger
          }, '-=0.3');
        }
        break;
      case 'slideIn':
        tl.to(elements, {
          x: 0, opacity: 1,
          duration: 0.6, ease: 'power2.out', stagger
        });
        break;
      case 'scale':
        tl.to(elements, {
          scale: 1, opacity: 1,
          duration: 0.6, ease: 'back.out(1.4)', stagger
        });
        break;
      default:
        tl.to(elements, {
          y: 0, opacity: 1,
          duration: 0.6, ease: 'power2.out', stagger
        });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, [animation, stagger, delay]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
};

export default AnimatedSection;