import React from 'react';
import { Code, Palette, Zap, Heart, Star, Coffee } from 'lucide-react';
import DoodleCard from './common/DoodleCard';
import SectionContainer from './common/SectionContainer';
import AnimatedSection from './common/AnimatedSection';
import { PERSONAL_INFO, TECH_STACK, ABOUT_FEATURES } from '../constants';

const About = () => {
  const iconMap = { Code, Palette, Zap, Heart };

  return (
    <SectionContainer id="about" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-gray-600 dark:text-gray-400" />
        <Coffee className="absolute top-20 right-20 w-6 h-6 text-gray-500 dark:text-gray-500" />
        <Heart className="absolute bottom-20 left-20 w-7 h-7 text-gray-600 dark:text-gray-400" />
        <Code className="absolute bottom-10 right-10 w-9 h-9 text-gray-700 dark:text-gray-300" />
      </div>

      <div className="relative space-y-16">
        {/* Header */}
        <AnimatedSection animation="chars" className="text-center">
          <DoodleCard size="wide" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h2 className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent doodle-sketch">
                {PERSONAL_INFO.aboutTitle}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>
          </DoodleCard>
        </AnimatedSection>

        {/* Main Content Grid */}
        <AnimatedSection animation="slideIn" stagger={0.3} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Content */}
          <DoodleCard size="large" className="p-8 space-y-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h3 className="doodle-heading-lg text-gray-800 dark:text-gray-200">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {PERSONAL_INFO.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <DoodleCard
                  key={tech}
                  size="small"
                  className="tech-tag px-4 py-2 bg-gray-600/20 text-gray-700 dark:text-gray-300 text-sm font-medium cursor-pointer border-gray-400 dark:border-gray-500"
                >
                  {tech}
                </DoodleCard>
              ))}
            </div>
          </DoodleCard>

          {/* Profile Image Section */}
          <DoodleCard size="large" className="relative p-8 bg-gradient-to-br from-gray-200/50 via-gray-300/50 to-gray-400/50 dark:from-gray-700/50 dark:via-gray-600/50 dark:to-gray-500/50 border-gray-300 dark:border-gray-600">
            <div className="text-center text-gray-800 dark:text-gray-200">
              <DoodleCard size="medium" className="w-32 h-32 bg-gray-600/20 backdrop-blur-sm mx-auto flex items-center justify-center mb-6 border-gray-500 dark:border-gray-400">
                <Code size={48} className="text-gray-700 dark:text-gray-300" />
              </DoodleCard>
              <h4 className="doodle-heading-md mb-2">Passionate Developer</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Creating amazing digital experiences with code and creativity
              </p>
            </div>
          </DoodleCard>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection animation="scale" stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const colors = ['gray-600', 'gray-700', 'gray-500', 'gray-800'];
            const color = colors[index % colors.length];
            
            return (
              <DoodleCard
                key={feature.title}
                size="medium"
                className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-center border-gray-300 dark:border-gray-600"
              >
                <div className="mb-4">
                  <DoodleCard size="small" className={`w-16 h-16 bg-${color}/20 mx-auto flex items-center justify-center border-${color} dark:border-gray-400`}>
                    <IconComponent size={32} className={`text-${color} dark:text-gray-300`} />
                  </DoodleCard>
                </div>
                
                <h4 className="doodle-heading-sm mb-2 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </DoodleCard>
            );
          })}
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
};

export default About;