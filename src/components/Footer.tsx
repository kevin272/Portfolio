import { useEffect, useRef, type ComponentType } from 'react';
import { gsap } from 'gsap';
import * as Icons from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t border-white/5 bg-slate-950/80 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="footer-content relative mx-auto flex max-w-6xl flex-col gap-12 px-6 text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Let’s build something remarkable</h3>
          <p className="mt-2 text-sm text-slate-400">
            Crafted with React, TypeScript, Tailwind, and a touch of GSAP. Designed for fluidity and ease.
          </p>
        </div>

        <nav className="footer-content flex flex-wrap gap-4 text-sm text-slate-300">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-content flex gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = Icons[link.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 hover:text-emerald-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="footer-content relative mx-auto mt-12 flex max-w-6xl flex-col items-center gap-2 px-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Kebin Malla. All rights reserved.</span>
        <span>Made in Kathmandu • Available for remote collaborations</span>
      </div>
    </footer>
  );
};

export default Footer;
