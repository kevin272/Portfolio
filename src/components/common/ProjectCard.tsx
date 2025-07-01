import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import DoodleCard from './DoodleCard';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
    featured?: boolean;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { force3D: true });

    const image = card.querySelector('.project-image');
    const links = card.querySelectorAll('.project-link');
    const techTags = card.querySelectorAll('.tech-tag');

    const handleEnter = () => {
      gsap.to(card, { y: -15, scale: 1.02, duration: 0.3, ease: 'power2.out' });
      gsap.to(image, { scale: 1.1, duration: 0.6, ease: 'power2.out' });
      gsap.to(links, { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'back.out(1.4)', stagger: 0.05 });
    };

    const handleLeave = () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(links, { opacity: 0, y: 10, scale: 0.8, duration: 0.2, ease: 'power2.out' });
    };

    // Tech tag animations
    techTags.forEach(tag => {
      const tagEnter = () => gsap.to(tag, { y: -10, scale: 1.15, rotation: Math.random() * 8 - 4, duration: 0.15, ease: 'back.out(1.7)' });
      const tagLeave = () => gsap.to(tag, { y: 0, scale: 1, rotation: 0, duration: 0.15, ease: 'back.out(1.7)' });
      tag.addEventListener('mouseenter', tagEnter);
      tag.addEventListener('mouseleave', tagLeave);
    });

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <DoodleCard
      ref={cardRef}
      size="large"
      hoverEffect="none"
      className="project-card group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden border-gray-300 dark:border-gray-600"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="project-image w-full h-48 md:h-56 object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60"></div>
        
        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.github && (
            <DoodleCard size="small" className="project-link p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm opacity-0 transform translate-y-2 scale-75 border-gray-300 dark:border-gray-600">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
                <Github size={20} />
              </a>
            </DoodleCard>
          )}
          {project.live && (
            <DoodleCard size="small" className="project-link p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm opacity-0 transform translate-y-2 scale-75 border-gray-300 dark:border-gray-600">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
                <ExternalLink size={20} />
              </a>
            </DoodleCard>
          )}
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <DoodleCard size="small" className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 border-gray-500">
              <span className="text-white text-xs font-semibold">Featured</span>
            </DoodleCard>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="doodle-heading-md group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <DoodleCard
              key={tech}
              size="small"
              className="tech-tag px-3 py-1 bg-gray-600/20 text-gray-700 dark:text-gray-300 cursor-pointer border-gray-400 dark:border-gray-500"
            >
              <span className="text-xs font-medium">{tech}</span>
            </DoodleCard>
          ))}
        </div>

        {/* View Project Button */}
        <div className="pt-4">
          <a
            href={project.live || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors group/link"
          >
            <span>View Project</span>
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </DoodleCard>
  );
};

export default ProjectCard;