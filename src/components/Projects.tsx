import React from 'react';
import { Star, Code, Palette, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import DoodleCard from './common/DoodleCard';
import SectionContainer from './common/SectionContainer';
import AnimatedSection from './common/AnimatedSection';
import ProjectCard from './common/ProjectCard';

const Projects = () => {
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <SectionContainer id="projects" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-gray-600 dark:text-gray-400 animate-pulse" />
        <Code className="absolute top-20 right-20 w-6 h-6 text-gray-700 dark:text-gray-300 animate-wiggle" />
        <Palette className="absolute bottom-20 left-20 w-7 h-7 text-gray-500 dark:text-gray-500 animate-doodle-bounce" />
        <Github className="absolute bottom-10 right-10 w-9 h-9 text-gray-600 dark:text-gray-400 animate-pulse" />
      </div>
      
      <div className="relative z-10">
        <AnimatedSection animation="chars" className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h2 className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent doodle-sketch">
                Featured Projects
              </span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              A selection of my recent work that showcases my skills and passion for creating 
              exceptional digital experiences.
            </p>
          </DoodleCard>
        </AnimatedSection>

        <AnimatedSection animation="scale" stagger={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatedSection>

        {/* View All Projects Button */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <DoodleCard size="medium" className="inline-block border-gray-400 dark:border-gray-500">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-lg font-semibold rounded-lg transition-all duration-300">
              View All Projects
            </button>
          </DoodleCard>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
};

export default Projects;