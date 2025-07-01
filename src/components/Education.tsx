import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, Award, Users, Trophy, Star, BookOpen, Brain } from 'lucide-react';
import AnimatedText from './common/AnimatedText';
import SectionContainer from './common/SectionContainer';
import GradientText from './common/GradientText';
import DoodleCard from './common/DoodleCard';
import { EDUCATION } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    // Optimize GSAP settings for smoother animations
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });

    // Timeline animation with optimized performance
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    const timelineLine = timeline.querySelector('.timeline-line');

    // Animate timeline line with better performance
    if (timelineLine) {
      gsap.fromTo(timelineLine,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.5
          }
        }
      );
    }

    // Animate timeline items with staggered entrance
    timelineItems.forEach((item, index) => {
      const isEven = index % 2 === 0;
      
      gsap.fromTo(item,
        { 
          x: isEven ? -80 : 80, 
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SectionContainer id="education" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow animate-pulse" />
        <BookOpen className="absolute top-20 right-20 w-6 h-6 text-doodle-blue animate-wiggle" />
        <Brain className="absolute bottom-20 left-20 w-7 h-7 text-doodle-pink animate-doodle-bounce" />
        <GraduationCap className="absolute bottom-10 right-10 w-9 h-9 text-doodle-green animate-pulse" />
        
        {/* Hand-drawn shapes */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-3 border-doodle-orange rounded-full opacity-30 animate-float"></div>
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

      <div ref={sectionRef} className="relative z-10">
        <div className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm">
            <h2 className="doodle-heading-xl mb-6">
              <GradientText>
                <AnimatedText
                  text="Education & Learning"
                  animation="splitChars"
                  trigger="#education"
                  className="doodle-sketch"
                />
              </GradientText>
            </h2>
            
            <AnimatedText
              text="My academic journey and continuous learning path in technology"
              className="doodle-text-secondary text-xl max-w-3xl mx-auto leading-relaxed"
              trigger="#education"
              delay={0.5}
            />
          </DoodleCard>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-doodle-blue to-doodle-green" style={{borderRadius: '50% 50% 50% 50%'}}></div>

          {EDUCATION.map((edu, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={edu.id}
                className={`timeline-item relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <DoodleCard size="small" className="w-8 h-8 bg-gradient-to-r from-doodle-blue to-doodle-green flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </DoodleCard>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <DoodleCard
                    size="large"
                    hoverEffect="lift"
                    className="bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm p-6"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <DoodleCard size="small" className="p-2 bg-gradient-to-r from-doodle-blue to-doodle-green">
                          <GraduationCap size={20} className="text-white" />
                        </DoodleCard>
                        <div>
                          <h3 className="doodle-heading-sm">
                            <span className="doodle-text">{edu.degree}</span>
                          </h3>
                          <p className="doodle-text-primary font-medium">
                            {edu.field}
                          </p>
                        </div>
                      </div>
                      {edu.gpa && (
                        <DoodleCard size="small" className="p-2 bg-doodle-yellow/20 text-center">
                          <p className="text-xs doodle-text-muted">GPA</p>
                          <p className="doodle-heading-sm text-doodle-green">
                            {edu.gpa}
                          </p>
                        </DoodleCard>
                      )}
                    </div>

                    {/* Institution */}
                    <h4 className="doodle-heading-md mb-2">
                      <span className="doodle-text">{edu.institution}</span>
                    </h4>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <DoodleCard size="small" className="px-3 py-1 bg-doodle-blue/20 flex items-center space-x-1">
                        <Calendar size={14} className="text-doodle-blue" />
                        <span className="text-sm doodle-text">{edu.startDate} - {edu.endDate}</span>
                      </DoodleCard>
                      <DoodleCard size="small" className="px-3 py-1 bg-doodle-green/20 flex items-center space-x-1">
                        <MapPin size={14} className="text-doodle-green" />
                        <span className="text-sm doodle-text">{edu.location}</span>
                      </DoodleCard>
                    </div>

                    {/* Description */}
                    <p className="doodle-text-secondary leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <DoodleCard size="medium" className="p-4 bg-gradient-to-r from-doodle-yellow/20 via-doodle-pink/20 to-doodle-purple/20">
                        <h5 className="doodle-heading-sm mb-3 flex items-center space-x-2">
                          <Trophy size={16} className="text-doodle-orange" />
                          <span className="doodle-text">Key Achievements</span>
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start space-x-2"
                            >
                              <Award size={12} className="text-doodle-blue mt-1 flex-shrink-0" />
                              <span className="text-sm doodle-text-secondary">{achievement}</span>
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
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DoodleCard
              size="medium"
              hoverEffect="bounce"
              className="text-center p-6 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm"
            >
              <div className="mb-4">
                <DoodleCard size="small" className="w-16 h-16 bg-gradient-to-r from-doodle-blue to-doodle-blue-light mx-auto flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </DoodleCard>
              </div>
              <h3 className="doodle-heading-lg mb-2">
                <span className="doodle-text">{EDUCATION.length}+</span>
              </h3>
              <p className="doodle-text-muted">
                Educational Programs
              </p>
            </DoodleCard>

            <DoodleCard
              size="medium"
              hoverEffect="bounce"
              className="text-center p-6 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm"
            >
              <div className="mb-4">
                <DoodleCard size="small" className="w-16 h-16 bg-gradient-to-r from-doodle-green to-doodle-green-light mx-auto flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </DoodleCard>
              </div>
              <h3 className="doodle-heading-lg mb-2">
                <span className="doodle-text">3.8</span>
              </h3>
              <p className="doodle-text-muted">
                Average GPA
              </p>
            </DoodleCard>

            <DoodleCard
              size="medium"
              hoverEffect="bounce"
              className="text-center p-6 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60 backdrop-blur-sm"
            >
              <div className="mb-4">
                <DoodleCard size="small" className="w-16 h-16 bg-gradient-to-r from-doodle-purple to-doodle-pink mx-auto flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </DoodleCard>
              </div>
              <h3 className="doodle-heading-lg mb-2">
                <span className="doodle-text">5+</span>
              </h3>
              <p className="doodle-text-muted">
                Years of Learning
              </p>
            </DoodleCard>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <DoodleCard 
            size="wide" 
            variant="colorful"
            className="p-8 bg-gradient-to-br from-doodle-yellow/30 via-doodle-pink/30 to-doodle-purple/30 backdrop-blur-sm text-center"
          >
            <h3 className="doodle-heading-lg mb-6">
              <span className="doodle-text">Learning Never Stops</span>
            </h3>
            <p className="doodle-text-secondary max-w-4xl mx-auto leading-relaxed text-lg mb-8">
              Education is not just about formal degrees—it's a lifelong journey of curiosity, 
              experimentation, and growth. Every project teaches me something new, every challenge 
              pushes my boundaries, and every collaboration expands my perspective.
            </p>
            
            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <DoodleCard size="small" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60">
                <div className="text-3xl mb-2">📚</div>
                <div className="doodle-heading-sm">200+</div>
                <div className="doodle-text-muted text-sm">Hours of Study</div>
              </DoodleCard>
              
              <DoodleCard size="small" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60">
                <div className="text-3xl mb-2">🎓</div>
                <div className="doodle-heading-sm">15+</div>
                <div className="doodle-text-muted text-sm">Certifications</div>
              </DoodleCard>
              
              <DoodleCard size="small" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60">
                <div className="text-3xl mb-2">💡</div>
                <div className="doodle-heading-sm">50+</div>
                <div className="doodle-text-muted text-sm">Projects Completed</div>
              </DoodleCard>
              
              <DoodleCard size="small" className="p-4 bg-doodle-paper/60 dark:bg-doodle-paper-dark/60">
                <div className="text-3xl mb-2">🌟</div>
                <div className="doodle-heading-sm">∞</div>
                <div className="doodle-text-muted text-sm">Curiosity Level</div>
              </DoodleCard>
            </div>
          </DoodleCard>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;