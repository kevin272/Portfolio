import React from 'react';
import SectionContainer from './common/SectionContainer';
import DoodleCard from './common/DoodleCard';
import AnimatedSection from './common/AnimatedSection';
import { SKILL_CATEGORIES } from '../constants';
import { Star, Sparkles, Heart, Zap } from 'lucide-react';

const Skills = () => {
  return (
    <SectionContainer id="skills" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-gray-600 dark:text-gray-400 animate-pulse" />
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-gray-700 dark:text-gray-300 animate-wiggle" />
        <Heart className="absolute bottom-20 left-20 w-7 h-7 text-gray-500 dark:text-gray-500 animate-doodle-bounce" />
        <Zap className="absolute bottom-10 right-10 w-9 h-9 text-gray-600 dark:text-gray-400 animate-pulse" />
      </div>

      <div className="relative z-10">
        <AnimatedSection animation="chars" className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h2 className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent doodle-sketch">
                Skills & Technologies
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
            </p>
          </DoodleCard>
        </AnimatedSection>

        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title}>
              <AnimatedSection animation="fadeUp" className="text-center mb-12">
                <DoodleCard size="medium" className="inline-block p-6 bg-gradient-to-r from-gray-200/50 via-gray-300/50 to-gray-400/50 dark:from-gray-700/50 dark:via-gray-600/50 dark:to-gray-500/50 backdrop-blur-sm border-gray-300 dark:border-gray-600">
                  <h3 className="doodle-heading-lg mb-4 text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 mx-auto rounded-full"></div>
                </DoodleCard>
              </AnimatedSection>

              <AnimatedSection animation="scale" stagger={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <DoodleCard 
                    key={skill.name}
                    size="small" 
                    className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-center group border-gray-300 dark:border-gray-600"
                  >
                    <div className="mb-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-sm">
                      {skill.name}
                    </h4>

                    
                  </DoodleCard>
                ))}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;