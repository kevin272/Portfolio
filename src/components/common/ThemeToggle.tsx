import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import DoodleCard from './DoodleCard';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const toggle = toggleRef.current;
    const sun = sunRef.current;
    const moon = moonRef.current;

    if (!toggle || !sun || !moon) return;

    // Create timeline with doodle-style animations
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    // Set initial positions
    gsap.set(sun, { 
      scale: 1, 
      rotation: 0,
      opacity: 1,
      transformOrigin: 'center'
    });
    gsap.set(moon, { 
      scale: 0, 
      rotation: -180,
      opacity: 0,
      transformOrigin: 'center'
    });

    // Doodle-style animation timeline
    tl.to(sun, {
      scale: 0,
      rotation: 360,
      opacity: 0,
      duration: 0.4,
      ease: 'elastic.in(1, 0.5)'
    })
    .to(moon, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)'
    }, 0.2);

    // Set initial state based on theme
    if (isDark) {
      tl.progress(1);
    } else {
      tl.progress(0);
    }

    return () => {
      tl.kill();
    };
  }, []); // Only run once on mount

  useEffect(() => {
    // Update animation when theme changes
    const tl = timelineRef.current;
    if (!tl) return;

    if (isDark) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isDark]);

  const handleToggle = () => {
    const toggle = toggleRef.current;
    if (!toggle) return;

    // Doodle-style click animation
    gsap.to(toggle, {
      scale: 0.8,
      rotation: Math.random() * 20 - 10,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        toggleTheme();
      }
    });
  };

  return (
    <DoodleCard 
      className="p-3 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm cursor-pointer"
      hoverEffect="wiggle"
      onClick={handleToggle}
    >
      <button
        ref={toggleRef}
        className="relative w-6 h-6 focus:outline-none"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative w-full h-full">
          <div
            ref={sunRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun size={20} className="text-doodle-yellow" />
          </div>
          <div
            ref={moonRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon size={20} className="text-doodle-blue" />
          </div>
        </div>
      </button>
    </DoodleCard>
  );
};

export default ThemeToggle;