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
import SmoothScroll from '../components/SmoothScroll';
import Particles from '../components/Squares';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, ScrollSmoother);

function AppContent() {
  const { isDark } = useTheme();

  useEffect(() => {
    
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

      <SmoothScroll>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-inter relative transition-all duration-300">
        {/* Squares Background with reduced opacity */}
        <div className="fixed inset-0 z-0">
          <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  />
        </div>
        
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
      </SmoothScroll>

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