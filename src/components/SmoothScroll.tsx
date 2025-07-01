import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx = gsap.context(() => {
      // Smooth scroll implementation
      let smoother = gsap.to({}, {
        duration: 0.8,
        ease: "power3.out"
      });

      // Custom smooth scroll for anchor links
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href')?.substring(1);
          const target = document.getElementById(targetId || '');
          
          if (target) {
            gsap.to(window, {
              duration: 1.8,
              scrollTo: { 
                y: target, 
                offsetY: 80,
                autoKill: false
              },
              ease: "power3.inOut"
            });
          }
        });
      });

      // Enhanced scroll experience with momentum
      let isScrolling = false;
      let scrollTimeout: number;

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          document.body.classList.add('is-scrolling');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          document.body.classList.remove('is-scrolling');
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="smooth-scroll-container">
      <style>{`
        .smooth-scroll-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        
        body.is-scrolling {
          cursor: grabbing;
        }
        
        html {
          scroll-behavior: auto;
        }
        
        * {
          scroll-behavior: auto;
        }
      `}</style>
    </div>
  );
};

export default SmoothScroll;