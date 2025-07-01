import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const fill = fillRef.current;

    if (!progress || !fill) return;

    // Initial animation
    gsap.fromTo(progress,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 0.8, ease: 'power2.out', delay: 1 }
    );

    // Scroll progress animation
    gsap.to(fill, {
      scaleX: 1,
      transformOrigin: 'left',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });

    // Pulse effect when scrolling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      gsap.to(fill, {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
        duration: 0.2,
        ease: 'power2.out'
      });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        gsap.to(fill, {
          boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
          duration: 0.5,
          ease: 'power2.out'
        });
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-dark-800 z-50"
    >
      <div
        ref={fillRef}
        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0"
      />
    </div>
  );
};

export default ScrollProgress;