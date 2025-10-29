import { useRef } from 'react';
import { gsap } from 'gsap';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const knobRef = useRef<HTMLSpanElement>(null);

  const handleToggle = () => {
    const knob = knobRef.current;
    if (!knob) return;

    gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } })
      .to(knob, { rotate: '+=180', scale: 0.85 })
      .to(knob, { scale: 1 }, '<0.1');

    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative flex h-11 w-20 items-center rounded-full bg-slate-900/80 p-1 text-slate-200 shadow-lg shadow-slate-950/30 backdrop-blur dark:bg-white/80 dark:text-slate-900"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        ref={knobRef}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 text-slate-900 transition-[margin] duration-300 ease-out dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-emerald-300 ${
          isDark ? 'ml-9' : 'ml-0'
        }`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
