import { FormEvent, useEffect, useRef, useState, type ComponentType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { CONTACT_CHANNELS, CONTACT_FORM_COPY } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-heading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      });

      gsap.from('.contact-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured yet. Please reach out directly.');
      return;
    }

    const loadingToast = toast.loading('Sending your message...');

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        publicKey
      )
      .then(() => {
        toast.success(CONTACT_FORM_COPY.successMessage, { id: loadingToast });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error(CONTACT_FORM_COPY.errorMessage, { id: loadingToast });
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative mx-auto mt-28 max-w-6xl px-6 pb-24">
      <div className="contact-heading text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Contact</div>
      <h2 className="contact-heading mt-4 text-3xl font-semibold text-white sm:text-4xl">
        {CONTACT_FORM_COPY.title}
      </h2>
      <p className="contact-heading mt-4 max-w-2xl text-base text-slate-300">{CONTACT_FORM_COPY.subtitle}</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="contact-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
          <h3 className="text-xl font-semibold text-white">Let’s collaborate</h3>
          <p className="mt-3 text-sm text-slate-300">
            Prefer a quick response? Reach out on any channel below. I’m happy to jump on a call or share more examples.
          </p>

          <div className="mt-8 space-y-5">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = Icons[channel.icon as keyof typeof Icons] as ComponentType<{ size?: number }>;
              const content = (
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{channel.title}</span>
                  <span className="text-sm text-slate-300">{channel.description}</span>
                </div>
              );

              return channel.href ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
                    <Icon size={20} />
                  </span>
                  {content}
                </a>
              ) : (
                <div
                  key={channel.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
                    <Icon size={20} />
                  </span>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-card relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
        >
          <div className="absolute -right-12 top-16 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Name
              <input
                required
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Message
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
              placeholder="Tell me about the project, goals, or timeline"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send message
            <Icons.Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
