import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import * as Icons from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import ThemeToggle from './common/ThemeToggle';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linkListRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const triggers = NAV_ITEMS.map((item) =>
      ScrollTrigger.create({
        trigger: `#${item.id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(item.id),
        onEnterBack: () => setActiveSection(item.id)
      })
    );

    const scrollTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        setScrolled(self.scroll() > 40);
      }
    });

    const nav = navRef.current;
    if (nav) {
      gsap.fromTo(
        nav,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const list = linkListRef.current;

    if (!indicator || !list) return;

    const activeLink = list.querySelector<HTMLButtonElement>(`button[data-link='${activeSection}']`);
    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();

    gsap.to(indicator, {
      x: linkRect.left - listRect.left,
      width: linkRect.width,
      duration: 0.4,
      ease: 'power3.out'
    });
  }, [activeSection]);

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    gsap.to(window, {
      duration: 1,
      ease: 'power3.out',
      scrollTo: { y: `#${id}`, offsetY: 96 }
    });
  };

  const socialIcons = useMemo(() => SOCIAL_LINKS.slice(0, 2), []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center gap-6 rounded-2xl border border-white/10 px-6 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-slate-900/80 py-4 shadow-2xl shadow-slate-900/20 backdrop-blur-xl dark:border-white/5 dark:bg-slate-900/70'
            : 'bg-transparent py-4 backdrop-blur-sm'
        }`}
      >
        <button
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white dark:text-emerald-200"
          onClick={() => handleNavigate('home')}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-900 shadow-lg shadow-emerald-500/30">
            KM
          </span>
          Kebin Malla
        </button>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          <div ref={linkListRef} className="relative flex items-center gap-1">
            <span
              ref={indicatorRef}
              className="pointer-events-none absolute left-0 h-8 rounded-full bg-white/10 dark:bg-emerald-400/20"
              style={{ width: 0 }}
            />
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-link={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`nav-link relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-white dark:text-emerald-200'
                    : 'text-slate-300 hover:text-white dark:text-slate-400 dark:hover:text-emerald-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialIcons.map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition-all hover:-translate-y-1 hover:border-white/20 hover:text-white dark:text-slate-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>

        <button
          className="ml-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-white transition-all md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-slate-900/40 backdrop-blur md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-2 flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-white/30 hover:text-white"
                >
                  <Icon size={18} />
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
