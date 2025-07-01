import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import SmoothScroll from './components/SmoothScroll';
import Particles from './components/Squares';
import { Toaster } from 'react-hot-toast';

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
      <div className="page-loader fixed inset-0 bg-gradient-to-br from-light-50 via-light-100 to-light-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mb-6"></div>
          <p className="text-light-900 dark:text-white text-xl font-medium">Loading...</p>
        </div>
      </div>
      <Navigation />
      <SmoothScroll>
      <div className="min-h-screen bg-gradient-to-br from-light-50 via-light-100 to-light-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-light-900 dark:text-white font-inter relative transition-all duration-300">
        <div className=" fixed inset-0  z-0">
          <Particles
          isDark={isDark}
    particleCount={1000}
    particleSpread={5}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
        </div>
        <ScrollProgress />
        
        <main className="relative overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      </SmoothScroll >

    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;