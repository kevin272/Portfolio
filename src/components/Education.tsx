import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-heading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      });

      gsap.from('.timeline-item', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative mx-auto mt-24 max-w-6xl px-6">
      <div className="timeline-heading text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Journey</div>
      <h2 className="timeline-heading mt-4 text-3xl font-semibold text-white sm:text-4xl">Learning by building</h2>

      <div className="relative mt-12 space-y-10">
        <span className="absolute left-[14px] top-0 h-full w-[2px] bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-500" />

        {EXPERIENCE_TIMELINE.map((item, index) => (
          <article
            key={item.id}
            className="timeline-item relative ml-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur"
          >
            <span className="absolute -left-10 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-slate-900 shadow-lg">
              {index + 1}
            </span>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Calendar size={16} />
                <span>
                  {item.start} — {item.end}
                </span>
              </div>
            </div>

            <p className="mt-2 text-sm text-emerald-100">{item.organisation}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={16} />
              {item.location}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
