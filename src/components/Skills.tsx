import { useEffect, useRef, type ComponentType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';
import { SKILL_GROUPS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-heading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      });

      gsap.from('.skill-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
      });

      gsap.utils.toArray<HTMLElement>('.skill-progress').forEach((bar) => {
        const level = bar.dataset.level ? parseInt(bar.dataset.level, 10) : 0;
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: `${level}%`,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 80%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative mx-auto mt-24 max-w-6xl px-6">
      <div className="skills-heading text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Skills</div>
      <h2 className="skills-heading mt-4 text-3xl font-semibold text-white sm:text-4xl">Tools of the craft</h2>
      <p className="skills-heading mt-4 max-w-2xl text-base text-slate-300">
        Years of shipping products across startups and freelance engagements taught me how to balance polish with velocity. These
        are the technologies and practices I rely on most.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((group) => {
          const Icon = Icons[group.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
          return (
            <div
              key={group.title}
              className="skill-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="text-sm text-slate-300">{group.description}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className="skill-progress h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500"
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
