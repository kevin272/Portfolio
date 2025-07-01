import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight, Star, Code, Palette } from 'lucide-react';
import { PROJECTS, IMAGES } from '../constants';
import DoodleCard from './common/DoodleCard';
import AnimatedText from './common/AnimatedText';
import SectionContainer from './common/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const projectsGrid = projectsGridRef.current;

    if (!section || !title || !subtitle || !projectsGrid) return;

    // Split title for character animation
    const titleText = title.textContent;
    if (titleText) {
      title.innerHTML = titleText.split('').map(char => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');
    }

    // Set initial states
    gsap.set(title.querySelectorAll('.char'), { y: 100, opacity: 0, rotationX: 90 });
    gsap.set(subtitle, { y: 50, opacity: 0 });
    gsap.set(projectsGrid.children, { y: 120, opacity: 0, rotationY: 45, scale: 0.8 });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(title.querySelectorAll('.char'), {
      duration: 0.8,
      y: 0,
      opacity: 1,
      rotationX: 0,
      ease: 'back.out(1.7)',
      stagger: 0.04
    })
    .to(subtitle, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .to(projectsGrid.children, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      rotationY: 0,
      scale: 1,
      ease: 'power2.out',
      stagger: 0.15
    }, '-=0.4');

    // Project cards animations
    projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
      const image = card.querySelector('.project-image');
      const overlay = card.querySelector('.project-overlay');
      const links = card.querySelectorAll('.project-link');
      const techTags = card.querySelectorAll('.tech-tag');

      // Parallax effect for project images
      gsap.to(image, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Tech tags hover animations
      techTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
          gsap.to(tag, {
            y: -8,
            scale: 1.1,
            rotation: Math.random() * 10 - 5,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)'
          });
        });

        tag.addEventListener('mouseleave', () => {
          gsap.to(tag, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });

      // Individual link hover animations
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            scale: 1.3,
            rotation: 360,
            duration: 0.4,
            ease: 'back.out(1.7)'
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
          });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <SectionContainer id="projects" className="doodle-section paper-texture">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow animate-pulse" />
        <Code className="absolute top-20 right-20 w-6 h-6 text-doodle-blue animate-wiggle" />
        <Palette className="absolute bottom-20 left-20 w-7 h-7 text-doodle-pink animate-doodle-bounce" />
        <Github className="absolute bottom-10 right-10 w-9 h-9 text-doodle-green animate-pulse" />
        
        {/* Hand-drawn shapes */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-3 border-doodle-orange rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-3 border-doodle-purple opacity-25 animate-wiggle" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-doodle-paper/90 dark:bg-doodle-paper-dark/90 backdrop-blur-sm">
            <h2 ref={titleRef} className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-doodle-blue to-doodle-green bg-clip-text text-transparent doodle-sketch">
                Featured Projects
              </span>
            </h2>
            
            <p ref={subtitleRef} className="doodle-text-secondary text-xl max-w-3xl mx-auto">
              A selection of my recent work that showcases my skills and passion for creating 
              exceptional digital experiences.
            </p>
          </DoodleCard>
        </div>

        <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <DoodleCard
              key={project.id}
              size="large"
              hoverEffect="lift"
              className="project-card group bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 md:h-56 object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-doodle-ink/80 via-doodle-ink/20 to-transparent opacity-60"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <DoodleCard size="small" className="project-link p-2 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm opacity-0 transform translate-y-2 scale-75">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doodle-text-primary hover:text-doodle-blue-dark transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </DoodleCard>
                  )}
                  {project.live && (
                    <DoodleCard size="small" className="project-link p-2 bg-doodle-paper/80 dark:bg-doodle-paper-dark/80 backdrop-blur-sm opacity-0 transform translate-y-2 scale-75">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doodle-text-primary hover:text-doodle-blue-dark transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </DoodleCard>
                  )}
                </div>

                <div className="absolute top-4 left-4">
                  <DoodleCard size="small" className="px-3 py-1 bg-gradient-to-r from-doodle-yellow to-doodle-orange">
                    <span className="doodle-text text-xs font-semibold">Featured</span>
                  </DoodleCard>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content p-6 space-y-4">
                <h3 className="doodle-heading-md group-hover:text-doodle-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="doodle-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <DoodleCard
                      key={tech}
                      size="small"
                      className="tech-tag px-3 py-1 bg-doodle-blue/20 text-doodle-blue dark:text-doodle-blue-light cursor-pointer"
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
                    className="inline-flex items-center space-x-2 doodle-text-primary hover:text-doodle-blue-dark font-medium transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </DoodleCard>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <DoodleCard size="medium" className="inline-block">
            <button className="doodle-button doodle-button-primary px-8 py-4 text-lg font-semibold">
              View All Projects
            </button>
          </DoodleCard>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;