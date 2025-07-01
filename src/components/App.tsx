import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import Squares from '../components/Squares';
import SmoothScroll from '../components/SmoothScroll';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

function AppContent() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Initialize smooth scrolling
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Page load animation
    const tl = gsap.timeline();
    tl.set('body', { overflow: 'hidden' })
      .to('.page-loader', {
        duration: 1.2,
        y: '-100%',
        ease: 'power2.inOut',
        delay: 0.8
      })
      .set('body', { overflow: 'auto' })
      .set('.page-loader', { display: 'none' });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Page Loader */}
      <div className="page-loader fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-gray-500/30 border-t-gray-700 dark:border-gray-400/30 dark:border-t-gray-300 rounded-full animate-spin mb-6"></div>
          <p className="text-gray-900 dark:text-white text-xl font-medium">Loading ...</p>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-inter relative transition-all duration-300">
        {/* Squares Background with reduced opacity */}
        <div className="fixed inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.3}
            borderColor={isDark ? 'rgba(156, 163, 175, 0.05)' : 'rgba(107, 114, 128, 0.05)'}
            squareSize={80}
            hoverFillColor={isDark ? 'rgba(75, 85, 99, 0.1)' : 'rgba(156, 163, 175, 0.1)'}
          />
        </div>
        
        <SmoothScroll />
        <ScrollProgress />
        <Navigation />
        <main className="relative overflow-hidden z-10">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;