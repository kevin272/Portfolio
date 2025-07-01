import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Home, User, Code, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants';
import ThemeToggle from './common/ThemeToggle';
import DoodleCard from './common/DoodleCard';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Icon mapping for navigation items
  const iconMap = {
    Home,
    User,
    Code,
    GraduationCap,
    Briefcase,
    Mail
  };

  useEffect(() => {
    const nav = navRef.current;
    const mobileButton = mobileButtonRef.current;

    if (!nav || !mobileButton) return;

    // Initial animations with doodle style
    gsap.fromTo(nav, 
      { y: -100, opacity: 0, rotation: -5 },
      { y: 0, opacity: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.5 }
    );

    gsap.fromTo(mobileButton,
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)', delay: 0.8 }
    );

    // Scroll-based navigation background
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: { className: 'nav-scrolled', targets: nav }
    });

    // Active section tracking
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(NAVIGATION_ITEMS[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    if (isOpen) {
      gsap.fromTo(mobileMenu,
        { opacity: 0, scale: 0.8, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' }
      );

      gsap.fromTo(mobileMenu.querySelectorAll('.mobile-nav-item'),
        { x: -50, opacity: 0, rotation: -10 },
        { x: 0, opacity: 1, rotation: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)', stagger: 0.1, delay: 0.2 }
      );
    }
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
    setIsOpen(false);
  };

  const handleNavItemClick = (itemId: string) => {
    // Button click animation with doodle style
    const button = document.querySelector(`[data-nav="${itemId}"]`);
    if (button) {
      gsap.to(button, {
        scale: 0.9,
        rotation: Math.random() * 10 - 5,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
    scrollToSection(itemId);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        ref={navRef}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-300"
      >
        <DoodleCard className="px-6 py-3 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-md shadow-doodle dark:shadow-doodle-dark">
          <div className="flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              
              return (
                <button
                  key={item.id}
                  data-nav={item.id}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 font-doodle ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-doodle-ink dark:text-gray-400 hover:text-doodle-blue dark:hover:text-white'
                  }`}
                  style={{
                    borderRadius: activeSection === item.id ? '40% 60% 30% 70% / 50% 40% 60% 30%' : '0'
                  }}
                >
                  {activeSection === item.id && (
                    <div 
                      className="absolute inset-0 bg-doodle-blue nav-active-bg" 
                      style={{ borderRadius: '40% 60% 30% 70% / 50% 40% 60% 30%' }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <IconComponent size={16} />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
            
            {/* Theme Toggle */}
            <div className="ml-4 pl-4 border-l-2 border-doodle-ink dark:border-white">
              <ThemeToggle />
            </div>
          </div>
        </DoodleCard>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden flex items-center space-x-3">
        <ThemeToggle />
        <DoodleCard className="p-3 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-md shadow-doodle dark:shadow-doodle-dark">
          <button
            ref={mobileButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="text-doodle-ink dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </DoodleCard>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 bg-doodle-paper/95 dark:bg-doodle-paper-dark/95 backdrop-blur-md z-40 md:hidden paper-texture"
        >
          <div className="flex items-center justify-center h-full">
            <div className="space-y-8">
              {NAVIGATION_ITEMS.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                
                return (
                  <DoodleCard
                    key={item.id}
                    className="mobile-nav-item p-4 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80"
                    onClick={() => handleNavItemClick(item.id)}
                    hoverEffect="wiggle"
                  >
                    <div className="flex items-center space-x-4 text-2xl font-medium text-doodle-ink dark:text-white font-doodle">
                      <IconComponent size={32} />
                      <span>{item.label}</span>
                    </div>
                  </DoodleCard>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style >{`
        .nav-scrolled {
          transform: translateX(-50%) translateY(-5px) rotate(1deg);
        }
        
        .nav-active-bg {
          animation: navActiveSlide 0.5s ease-out;
        }
        
        @keyframes navActiveSlide {
          from {
            transform: scale(0.8) rotate(-5deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;