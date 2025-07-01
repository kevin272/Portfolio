import React from 'react';
import AnimatedText from './common/AnimatedText';
import SectionContainer from './common/SectionContainer';
import GradientText from './common/GradientText';
import DoodleCard from './common/DoodleCard';
import { SKILL_CATEGORIES } from '../constants';
import { Star, Sparkles, Heart, Zap } from 'lucide-react';

const Skills = () => {
  return (
    <SectionContainer id="skills" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow animate-pulse" />
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-doodle-orange animate-wiggle" />
        <Heart className="absolute bottom-20 left-20 w-7 h-7 text-doodle-pink animate-doodle-bounce" />
        <Zap className="absolute bottom-10 right-10 w-9 h-9 text-doodle-blue animate-pulse" />
        
        {/* Hand-drawn circles */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-3 border-doodle-green rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-3 border-doodle-purple opacity-25 animate-wiggle" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
        
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

      <div className="relative z-10">
        <div className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm">
            <h2 className="doodle-heading-xl mb-6">
              <GradientText>
              <AnimatedText
                text="Skills & Technologies"
                animation="splitChars"
                trigger="#skills"
                className="doodle-sketch !text-transparent bg-clip-text bg-slate-700 dark:bg-white"
              />
              </GradientText>
            </h2>
            
            <AnimatedText
              text="A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences"
              className="doodle-text-secondary text-xl max-w-4xl mx-auto leading-relaxed"
              trigger="#skills"
              delay={0.5}
            />
          </DoodleCard>
        </div>

        <div className="space-y-16 ">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.title}>
              <div className="text-center mb-12">
                <DoodleCard size="medium" className="inline-block p-6 bg-gradient-to-r from-doodle-yellow/20 via-doodle-pink/20 to-doodle-purple/20 backdrop-blur-sm">
                  <h3 className="doodle-heading-lg mb-4">
                    <GradientText gradient="from-primary-400 via-secondary-400 to-accent-400">
                      <span className="doodle-text">{category.title}</span>
                    </GradientText>
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-doodle-blue to-doodle-green mx-auto" style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}}></div>
                </DoodleCard>
              </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <DoodleCard 
                    key={skill.name}
                    size="small" 
                    hoverEffect="lift"
                    className="p-4 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm text-center group"
                  >
                    {/* Skill Logo */}
                    <div className="mb-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Skill Name */}
                    <h4 className="doodle-text font-semibold text-sm">
                      {skill.name}
                    </h4>

                    
                  </DoodleCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </SectionContainer>
  );
};

export default Skills;