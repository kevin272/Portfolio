import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Quote } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-heading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      gsap.from('.about-paragraph', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        }
      });

      gsap.from('.about-highlight', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative mx-auto mt-12 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
        <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="about-heading flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
          <span className="h-[1px] w-10 bg-emerald-200/40" />
          About
        </div>
        <h2 className="about-heading mt-4 text-3xl font-semibold text-white sm:text-4xl">
          {ABOUT_CONTENT.title}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about-paragraph text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="about-paragraph rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
              <Quote size={28} className="mb-4 text-emerald-300" />
              <p className="text-sm leading-6 text-slate-200">
                "Kebin quickly transforms requirements into production-ready features while keeping the experience polished.
                Working together feels calm, collaborative, and impactful."
              </p>
              <p className="mt-4 text-sm font-semibold text-white">— Collaborator feedback</p>
            </div>
            {ABOUT_CONTENT.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="about-highlight flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-white"
              >
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                  <Check size={18} />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
