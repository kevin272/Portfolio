import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-heading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      });

      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative mx-auto mt-24 max-w-6xl px-6">
      <div className="projects-heading text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
        Selected work
      </div>
      <h2 className="projects-heading mt-4 text-3xl font-semibold text-white sm:text-4xl">
        Interfaces and systems built with care
      </h2>
      <p className="projects-heading mt-4 max-w-2xl text-base text-slate-300">
        Each project pairs refined UI with resilient architecture. Here’s a taste of the platforms, tools, and products I’ve
        helped bring to life.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70" />
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                <Layers size={14} />
                {project.status}
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 text-white">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.longDescription}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-emerald-100">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  <Github size={16} />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:text-white"
                  >
                    <ExternalLink size={16} />
                    Visit site
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
