import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap, Heart, Star, Coffee } from 'lucide-react';
import AnimatedText from './common/AnimatedText';
import DoodleCard from './common/DoodleCard';
import SectionContainer from './common/SectionContainer';
import GradientText from './common/GradientText';
import { PERSONAL_INFO, TECH_STACK, ABOUT_FEATURES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const doodleElementsRef = useRef<HTMLDivElement>(null);

  // Map icon names to actual icon components
  const iconMap = {
    Code,
    Palette,
    Zap,
    Heart
  };

  useEffect(() => {
    const techStackElement = techStackRef.current;
    const doodleElements = doodleElementsRef.current;
    
    if (!techStackElement || !doodleElements) return;

    // Animate doodle background elements
    gsap.to(doodleElements.children, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      stagger: 2
    });

    // Tech stack hover animations with doodle style
    techStackElement.querySelectorAll('.tech-tag').forEach((tag) => {
      tag.addEventListener('mouseenter', () => {
        gsap.to(tag, {
          scale: 1.15,
          y: -8,
          rotation: Math.random() * 10 - 5,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)'
        });
      });

      tag.addEventListener('mouseleave', () => {
        gsap.to(tag, {
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });
  }, []);

  return (
    <SectionContainer id="about" >
      <div ref={sectionRef} className="relative">
        {/* Doodle Background Elements */}
        <div ref={doodleElementsRef} className="absolute inset-0 pointer-events-none opacity-10">
          <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow" />
          <Coffee className="absolute top-20 right-20 w-6 h-6 text-doodle-orange" />
          <Heart className="absolute bottom-20 left-20 w-7 h-7 text-doodle-pink" />
          <Code className="absolute bottom-10 right-10 w-9 h-9 text-doodle-blue" />
          
          {/* Hand-drawn circles */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-3 border-doodle-green rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-3 border-doodle-purple rounded-doodle opacity-25"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-doodle">
            <GradientText>
              <AnimatedText
                text={PERSONAL_INFO.aboutTitle}
                animation="splitChars"
                trigger="#about"
                className="doodle-sketch"
              />
            </GradientText>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* About Content */}
          <DoodleCard
            className="p-8 space-y-6 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90"
            hoverEffect="lift"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-doodle-ink dark:text-white font-doodle">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-doodle-ink-light dark:text-gray-300 leading-relaxed">
              {PERSONAL_INFO.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div ref={techStackRef} className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech, index) => (
                <DoodleCard
                  key={tech}
                  className="tech-tag px-4 py-2 bg-doodle-blue/20 text-doodle-blue dark:text-doodle-blue-light text-sm font-medium cursor-pointer"
                  hoverEffect="bounce"
                  variant="outlined"
                >
                  {tech}
                </DoodleCard>
              ))}
            </div>
          </DoodleCard>

          {/* Profile Image Section */}
          <DoodleCard
            className="relative p-8 bg-gradient-to-br from-doodle-yellow/20 via-doodle-pink/20 to-doodle-purple/20"
            hoverEffect="wiggle"
            variant="colorful"
          >
            <div className="text-center text-doodle-ink dark:text-white">
              <div className="w-32 h-32 bg-doodle-blue/20 backdrop-blur-sm rounded-doodle mx-auto flex items-center justify-center mb-6 border-4 border-doodle-blue">
                <Code size={48} className="text-doodle-blue" />
              </div>
              <h4 className="text-xl font-bold font-doodle mb-2">Passionate Developer</h4>
              <p className="text-doodle-ink-light dark:text-gray-300">
                Creating amazing digital experiences with code and creativity
              </p>
            </div>
          </DoodleCard>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const colors = ['doodle-blue', 'doodle-green', 'doodle-purple', 'doodle-orange'];
            const color = colors[index % colors.length];
            
            return (
              <DoodleCard
                key={feature.title}
                className="p-6 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 text-center group"
                hoverEffect="lift"
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-${color}/20 rounded-doodle mx-auto flex items-center justify-center border-3 border-${color} group-hover:animate-wiggle`}>
                    <IconComponent size={32} className={`text-${color}`} />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-doodle-ink dark:text-white mb-2 font-doodle">
                  {feature.title}
                </h4>
                
                <p className="text-doodle-ink-light dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </DoodleCard>
            );
          })}
        </div>

        {/* Fun Stats */}
        <div className="mt-16">
          <DoodleCard
            className="p-8 bg-gradient-to-r from-doodle-yellow/30 via-doodle-pink/30 to-doodle-purple/30 text-center"
            variant="colorful"
            hoverEffect="bounce"
          >
            <h3 className="text-2xl font-bold text-doodle-ink dark:text-white mb-6 font-doodle">
              Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-doodle-blue mb-2">☕</div>
                <p className="text-doodle-ink dark:text-white font-medium">Coffee Lover</p>
                <p className="text-sm text-doodle-ink-light dark:text-gray-300">5+ cups per day</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-doodle-green mb-2">🚀</div>
                <p className="text-doodle-ink dark:text-white font-medium">Projects Built</p>
                <p className="text-sm text-doodle-ink-light dark:text-gray-300">5+ and counting</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-doodle-purple mb-2">🎨</div>
                <p className="text-doodle-ink dark:text-white font-medium">Design Enthusiast</p>
                <p className="text-sm text-doodle-ink-light dark:text-gray-300">Pixel perfectionist</p>
              </div>
            </div>
          </DoodleCard>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;