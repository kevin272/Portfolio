import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Star, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, CONTACT_FORM, PERSONAL_INFO } from '../constants';
import DoodleCard from './common/DoodleCard';
import SectionContainer from './common/SectionContainer';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { useTheme } from '../contexts/ThemeContext';
import "../index.css";


const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { isDark } = useTheme(); 
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Icon mapping for contact info
  const iconMap = {
    MapPin,
    Phone,
    Mail,
    MessageCircle
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
    const loadingToast = toast.loading('Sending your message...');

  e.preventDefault();

  emailjs.send(
    serviceId!,
    templateId!,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
        publicKey!,

  )
  .then(() => {
    toast.success('Message sent successfully!', { id: loadingToast });
    setFormData({ name: '', email: '', subject: '', message: '' });
  })
  .catch((error) => {
    toast.error('Failed to send message. Try again later.', { id: loadingToast });
  });

  const submitButton = formRef.current?.querySelector('.submit-button');
  if (submitButton) {
    gsap.to(submitButton, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
  }
};

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const contactInfoElement = contactInfoRef.current;
    const form = formRef.current;
    const map = mapRef.current;

    if (!section || !title || !subtitle || !contactInfoElement || !form || !map) return;

    // Split title for character animation
    const titleText = title.textContent;
    if (titleText) {
      title.innerHTML = titleText.split('').map(char => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');
    }

    // Set initial states
    gsap.set(title.querySelectorAll('.char'), { y: 80, opacity: 0, rotationX: 90 });
    gsap.set(subtitle, { y: 40, opacity: 0 });
    gsap.set(contactInfoElement.children, { x: -60, opacity: 0 });
    gsap.set(form.children, { x: 60, opacity: 0 });
    gsap.set(map, { y: 60, opacity: 0, scale: 0.9 });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(title.querySelectorAll('.char'), {
      duration: 0.8,
      y: 0,
      opacity: 1,
      rotationX: 0,
      ease: 'back.out(1.7)',
      stagger: 0.03
    })
    .to(subtitle, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .to(contactInfoElement.children, {
      duration: 0.8,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.1
    }, '-=0.4')
    .to(form.children, {
      duration: 0.8,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.1
    }, '-=0.6')
    .to(map, {
      duration: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      ease: 'power2.out'
    }, '-=0.4');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Detect dark mode using the 'dark' class on the html element (TailwindCSS convention)
  return (
    <SectionContainer id="contact" className="doodle-section paper-texture">
      {/* Reduced opacity doodle background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Star className="absolute top-10 left-10 w-8 h-8 text-doodle-yellow animate-pulse" />
        <Mail className="absolute top-20 right-20 w-6 h-6 text-doodle-blue animate-wiggle" />
        <Phone className="absolute bottom-20 left-20 w-7 h-7 text-doodle-green animate-doodle-bounce" />
        <MapPin className="absolute bottom-10 right-10 w-9 h-9 text-doodle-pink animate-pulse" />
        
        {/* Hand-drawn shapes with reduced opacity */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-3 border-doodle-orange rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-3 border-doodle-purple opacity-15 animate-wiggle" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
      </div>

      <div ref={sectionRef} className="relative z-10">
        <div className="text-center mb-16">
          <DoodleCard size="wide" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <h2 ref={titleRef} className="doodle-heading-xl mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent doodle-sketch">
                Get In Touch
              </span>
            </h2>
            
            <p ref={subtitleRef} className="text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </DoodleCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <DoodleCard size="medium" className="p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
              <h3 className="doodle-heading-lg mb-6">
                <span className="text-gray-800 dark:text-gray-200">{CONTACT_FORM.title}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {CONTACT_FORM.subtitle}
              </p>
            </DoodleCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CONTACT_INFO.map((info, index) => {
                const IconComponent = iconMap[info.icon as keyof typeof iconMap];
                const content = info.href ? (
                  <a href={info.href} className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span className="text-gray-800 dark:text-gray-200">{info.content}</span>
                );

                return (
                  <DoodleCard
                    key={info.title}
                    size="small"
                    hoverEffect="lift"
                    className="contact-info-card p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm cursor-pointer border-gray-300 dark:border-gray-600"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <DoodleCard size="small" className="contact-icon p-2 bg-gradient-to-r from-gray-600 to-gray-700 border-gray-400 dark:border-gray-500">
                          <IconComponent size={20} className="text-white" />
                        </DoodleCard>
                      </div>
                      <div>
                        <h4 className="text-gray-800 dark:text-gray-200 font-semibold">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{content}</p>
                      </div>
                    </div>
                  </DoodleCard>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <DoodleCard size="large" className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <DoodleCard size="medium" className="inline-block border-gray-400 dark:border-gray-500">
                <button
                  type="submit"
                  className="submit-button px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 w-full"
                >
                  <Send size={20} />
                  <span>{CONTACT_FORM.submitText}</span>
                </button>
              </DoodleCard>
            </form>
          </DoodleCard>
        </div>

        {/* Google Maps Section with Iframe */}
        <div ref={mapRef} className="mt-16">
          <div className="text-center mb-8">
            <DoodleCard size="medium" className="inline-block p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-300 dark:border-gray-600">
              <h3 className="doodle-heading-lg mb-4">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  Find Me Here
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Located in Kathmandu, Nepal
              </p>
            </DoodleCard>
          </div>

<DoodleCard size="wide" className="overflow-hidden border-gray-300 dark:border-gray-600">
  <div className="mapbox">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.80431848850318!2d85.33252347260708!3d27.69044049779537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0fc53efb5683825%3A0x6ed732e3b430f80c!2sSajhaBiz!5e0!3m2!1sen!2snp!4v1751250148977!5m2!1sen!2snp"
         width="100%"
      height="100%"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
      />
  </div>
</DoodleCard>

        </div>
        </div>
    </SectionContainer>
  );
};

export default Contact;