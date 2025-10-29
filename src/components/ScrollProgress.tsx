import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const fill = fillRef.current;

    if (!progress || !fill) return;

    const introTween = gsap.fromTo(
      progress,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.4 }
    );

    const fillTween = gsap.to(fill, {
      scaleX: 1,
      transformOrigin: 'left',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4
      }
    });

    return () => {
      introTween.kill();
      fillTween.kill();
      fillTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-1.5 bg-slate-900/50 backdrop-blur-sm"
    >
      <div
        ref={fillRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
      />
    </div>
  );
};

export default ScrollProgress;
