import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Download, Sparkles, Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import AnimatedText from './common/AnimatedText';
import DoodleButton from './common/DoodleButton';
import DoodleCard from './common/DoodleCard';
import { PERSONAL_INFO, SOCIAL_LINKS, IMAGES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const doodleElementsRef = useRef<HTMLDivElement>(null);

  // Icon mapping for social links
  const iconMap = {
    Github,
    Linkedin,
    Mail,
    Twitter
  };

  useEffect(() => {
    const hero = heroRef.current;
    const social = socialRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    const doodleElements = doodleElementsRef.current;

    if (!hero || !social || !scrollIndicator || !doodleElements) return;

    // Set initial states
    gsap.set([social, scrollIndicator], { opacity: 0 });
    gsap.set(doodleElements.children, { scale: 0, rotation: -180 });

    // Main entrance animation with doodle style
    const tl = gsap.timeline({ delay: 2 });
    
    // Animate doodle elements
    tl.to(doodleElements.children, {
      duration: 1.5,
      scale: 1,
      rotation: 0,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.2
    })
    .to(social.children, {
      duration: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      ease: 'back.out(1.7)',
      stagger: 0.15
    }, '-=0.8')
    .to(scrollIndicator, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: 'bounce.out',
    }, '-=0.6');

    // Continuous doodle animations
    gsap.to(doodleElements.children, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });

    // Scroll indicator wiggle
    gsap.to(scrollIndicator, {
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Social links doodle hover
    social.querySelectorAll('a').forEach((link, index) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { 
          scale: 1.2, 
          rotation: Math.random() * 20 - 10, 
          y: -8,
          duration: 0.4, 
          ease: 'elastic.out(1, 0.5)' 
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { 
          scale: 1, 
          rotation: 0, 
          y: 0,
          duration: 0.4, 
          ease: 'elastic.out(1, 0.5)' 
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleResumeDownload = () => {
    window.open(PERSONAL_INFO.resumeLink, '_blank');
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      {/* Doodle Background Elements */}
      <div ref={doodleElementsRef} className="absolute inset-0 pointer-events-none">
        {/* Hand-drawn shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-doodle-blue rounded-doodle animate-doodle-bounce opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-3 border-doodle-green rounded-full animate-wiggle opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-4 border-doodle-purple rounded-doodle-alt animate-float opacity-25"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 border-3 border-doodle-orange rounded-full animate-doodle-bounce opacity-20"></div>
        
        {/* Doodle stars */}
        <Sparkles className="absolute top-32 right-32 w-8 h-8 text-doodle-yellow animate-pulse" />
        <Heart className="absolute bottom-32 left-32 w-6 h-6 text-doodle-pink animate-pulse" />
        
        {/* Hand-drawn lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <path 
            d="M100,200 Q300,100 500,200 T900,200" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            className="text-doodle-blue hand-drawn"
          />
          <path 
            d="M200,600 Q400,500 600,600 T1000,600" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            className="text-doodle-green hand-drawn"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Content Card */}
          <DoodleCard className="p-8 md:p-12 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-doodle">
                <AnimatedText
                  text={PERSONAL_INFO.heroGreeting}
                  animation="splitChars"
                  delay={2}
                  className="text-doodle-blue doodle-sketch"
                />
                <br />
                <AnimatedText
                  text={PERSONAL_INFO.name}
                  animation="splitChars"
                  delay={2.5}
                  className="block text-doodle-ink dark:text-white doodle-wiggle"
                />
              </h1>
              
              <div className="text-xl md:text-2xl text-doodle-ink-light dark:text-gray-300 font-medium min-h-[3rem]">
                <AnimatedText
                  text={PERSONAL_INFO.subtitle}
                  animation="typewriter"
                  delay={3.5}
                />
              </div>
            </div>

            <AnimatedText
              text={PERSONAL_INFO.heroDescription}
              className="text-lg md:text-xl text-doodle-ink dark:text-gray-300 max-w-4xl mx-auto leading-relaxed block mt-6"
              delay={4.5}
            />

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-8">
              <div 
                className="opacity-0"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 5s forwards'
                }}
              >
                <DoodleButton
                  variant="primary"
                  size="lg"
                  icon={<Download size={24} />}
                  onClick={handleResumeDownload}
                  className="bg-doodle-yellow hover:bg-doodle-yellow-light"
                >
                  Download Resume
                </DoodleButton>
              </div>
              
              <div 
                className="opacity-0"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 5.3s forwards'
                }}
              >
                <DoodleButton
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-doodle-blue text-doodle-blue hover:bg-doodle-blue hover:text-white"
                >
                  Explore My Work
                </DoodleButton>
              </div>
            </div>
          </DoodleCard>

          {/* Social Links */}
          <div ref={socialRef} className="flex items-center justify-center space-x-6">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              
              return (
                <DoodleCard
                  key={social.name}
                  className="p-4 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm hover:bg-doodle-blue hover:text-white transition-all duration-300"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="block"
                  >
                    <IconComponent size={28} />
                  </a>
                </DoodleCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <DoodleCard 
          className="p-4 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center space-y-3 text-doodle-ink dark:text-white">
            <span className="text-sm font-medium tracking-wider uppercase font-doodle">Scroll Down</span>
            <div className="w-px h-8 bg-doodle-blue"></div>
            <ArrowDown size={24} className="animate-bounce" />
          </div>
        </DoodleCard>
      </div>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;