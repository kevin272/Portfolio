import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, ArrowUp, Star, Code } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import DoodleCard from './common/DoodleCard';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: 0 },
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    const footer = footerRef.current;
    const scrollButton = scrollButtonRef.current;

    if (!footer || !scrollButton) return;

    // Footer entrance animation
    gsap.fromTo(footer.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Scroll to top button animation
    gsap.fromTo(scrollButton,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: footer,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Heart beat animation
    const heart = footer.querySelector('.heart-icon');
    if (heart) {
      gsap.to(heart, {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-doodle-paper dark:bg-doodle-paper-dark border-t-2 border-doodle-ink dark:border-white paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow animate-pulse" />
        <Code className="absolute top-10 right-10 w-6 h-6 text-doodle-blue animate-wiggle" />
        <Heart className="absolute bottom-10 left-10 w-7 h-7 text-doodle-pink animate-doodle-bounce" />
        
        {/* Hand-drawn lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 200">
          <path 
            d="M0,100 Q300,50 600,100 T1200,100" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            className="text-doodle-blue hand-drawn"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo/Name */}
          <DoodleCard size="medium" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm">
            <h3 className="doodle-heading-md">
              <span className="bg-gradient-to-r from-doodle-blue to-doodle-green bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h3>
            <p className="doodle-text-muted mt-2">{PERSONAL_INFO.title}</p>
          </DoodleCard>

          {/* Center - Copyright */}
          <DoodleCard size="medium" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm text-center">
            <p className="doodle-text flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-doodle-pink heart-icon" />
              <span>by {PERSONAL_INFO.name}</span>
            </p>
            <p className="doodle-text-muted text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </DoodleCard>

          {/* Right - Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent = React.lazy(async () => {
                const iconModule = await import('lucide-react');
                const Icon = iconModule[social.icon as keyof typeof iconModule] as React.ComponentType<any>;
                return { default: Icon };
              });

              return (
                <DoodleCard
                  key={social.name}
                  size="small"
                  hoverEffect="wiggle"
                  className="p-3 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm group"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link block"
                    aria-label={social.name}
                  >
                    <React.Suspense fallback={<div className="w-5 h-5" />}>
                      <IconComponent size={20} className="doodle-text-muted group-hover:text-doodle-blue transition-colors" />
                    </React.Suspense>
                  </a>
                </DoodleCard>
              );
            })}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute -top-6 right-8">
          <DoodleCard size="small" className="bg-gradient-to-r from-doodle-blue to-doodle-green">
            <button
              ref={scrollButtonRef}
              onClick={scrollToTop}
              className="p-3 text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </DoodleCard>
        </div>
      </div>
    </footer>
  );
};

export default Footer;