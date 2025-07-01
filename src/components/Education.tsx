import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Users, Trophy, Star, BookOpen, Brain } from 'lucide-react';
import SectionContainer from './common/SectionContainer';
import DoodleCard from './common/DoodleCard';
import AnimatedSection from './common/AnimatedSection';
import { EDUCATION } from '../constants';

const Education = () => {
  return (
    <SectionContainer id="education" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-gray-600 dark:text-gray-400 animate-pulse" />
        <BookOpen className="absolute top-20 right-20 w-6 h-6 text-gray-700 dark:text-gray-300 animate-wiggle" />
        <Brain className="absolute bottom-20 left-20 w-7 h-7 text-gray-500 dark:text-gray-500 animate-doodle-bounce" />
        <GraduationCap className="absolute bottom-10 right-10 w-9 h-9 text-gray-600 dark:text-gray-400 animate-pulse" />
      </div>

      <div className="relative z-10">
        <AnimatedSection animation="chars" className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h2 className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent doodle-sketch">
                Education & Learning
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My academic journey and continuous learning path in technology
            </p>
          </DoodleCard>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection animation="slideIn" stagger={0.3} className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>

          {EDUCATION.map((edu, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={edu.id}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <DoodleCard size="small" className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 flex items-center justify-center border-gray-500 dark:border-gray-400">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </DoodleCard>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <DoodleCard size="large" className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 border-gray-300 dark:border-gray-600">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <DoodleCard size="small" className="p-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 border-gray-500 dark:border-gray-400">
                          <GraduationCap size={20} className="text-white" />
                        </DoodleCard>
                        <div>
                          <h3 className="doodle-heading-sm text-gray-800 dark:text-gray-200">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Institution */}
                    <h4 className="doodle-heading-md mb-2 text-gray-800 dark:text-gray-200">
                      {edu.institution}
                    </h4>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <DoodleCard size="small" className="px-3 py-1 bg-gray-600/20 flex items-center space-x-1 border-gray-400 dark:border-gray-500">
                        <Calendar size={14} className="text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{edu.startDate} - {edu.endDate}</span>
                      </DoodleCard>
                      <DoodleCard size="small" className="px-3 py-1 bg-gray-600/20 flex items-center space-x-1 border-gray-400 dark:border-gray-500">
                        <MapPin size={14} className="text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{edu.location}</span>
                      </DoodleCard>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <DoodleCard size="medium" className="p-4 bg-gradient-to-r from-gray-200/50 via-gray-300/50 to-gray-400/50 dark:from-gray-700/50 dark:via-gray-600/50 dark:to-gray-500/50 border-gray-300 dark:border-gray-600">
                        <h5 className="doodle-heading-sm mb-3 flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                          <Trophy size={16} className="text-gray-600 dark:text-gray-400" />
                          <span>Key Achievements</span>
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start space-x-2"
                            >
                              <Award size={12} className="text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </DoodleCard>
                    )}
                  </DoodleCard>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12"></div>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
};

export default Education;