import { useEffect, useRef, type ComponentType } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import * as Icons from 'lucide-react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-description', { y: 32, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.35 });
      gsap.from('.hero-actions button', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.45
      });
      gsap.utils.toArray<HTMLElement>('.hero-stat').forEach((card, index) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.6 + index * 0.1
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.hero-orb').forEach((orb, index) => {
        gsap.to(orb, {
          x: `random(-40, 40)`,
          y: `random(-30, 30)`,
          scale: gsap.utils.random(0.9, 1.05),
          rotate: gsap.utils.random(-12, 12),
          duration: gsap.utils.random(10, 16),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.6
        });
      });
    }, backgroundRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-40 pb-32">
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="hero-orb absolute -right-10 top-52 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="hero-orb absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_55%)]" />
      </div>

      <div ref={heroRef} className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div className="relative">
          <div className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg dark:border-white/10">
            <Sparkles size={16} />
            {HERO_CONTENT.role}
          </div>
          <h1 className="hero-headline text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.tagline}
          </h1>
          <p className="hero-description mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {HERO_CONTENT.description}
          </p>
          <div className="hero-actions mt-10 flex flex-wrap gap-4">
            {HERO_CONTENT.callToActions.map((action) => (
              <button
                key={action.label}
                onClick={() => {
                  if (action.external) {
                    window.open(action.href, '_blank', 'noopener,noreferrer');
                    return;
                  }

                  gsap.to(window, { duration: 1, scrollTo: { y: action.href, offsetY: 96 }, ease: 'power3.out' });
                }}
                className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  action.variant === 'primary'
                    ? 'bg-white text-slate-900 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:text-white'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                }`}
              >
                {action.label}
                {action.variant === 'primary' ? <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /> : <Download size={18} />}
              </button>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-6">
            {HERO_CONTENT.stats.map((stat) => (
              <div
                key={stat.label}
                className="hero-stat flex min-w-[140px] flex-col rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white backdrop-blur"
              >
                <span className="text-3xl font-semibold">{stat.value}</span>
                <span className="mt-1 text-sm text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/0" />
          <div className="flex flex-col gap-6 text-white">
            <div>
              <h2 className="text-xl font-semibold">{HERO_CONTENT.name}</h2>
              <p className="mt-2 text-sm text-slate-300">Kathmandu, Nepal</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = Icons[link.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    <span>{link.name}</span>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              <p>
                Currently focused on launching collaborative SaaS tools and real-time platforms. Open to freelance and full-time
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
