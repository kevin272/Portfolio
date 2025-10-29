export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/kevin272',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kebinmalla',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:mallakebin@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/DevilKevin2',
    icon: 'Twitter'
  }
] as const;

export const HERO_CONTENT = {
  name: 'Kebin Malla',
  role: 'Full-stack developer',
  tagline: 'Turning ambitious ideas into reliable digital products.',
  description:
    "I'm a MERN-stack developer based in Kathmandu who enjoys bringing polished, performant interfaces together with dependable backends. I collaborate closely with teams to move quickly without compromising quality.",
  callToActions: [
    { label: 'View projects', href: '#projects', variant: 'primary' as const },
    {
      label: 'Download résumé',
      href: 'https://drive.google.com/file/d/1q--KNIMRF6njAYOLiQ0qrEcprvDt2n9c/view?usp=drive_link',
      variant: 'ghost' as const,
      external: true
    }
  ],
  stats: [
    { label: 'Years of experience', value: '3+' },
    { label: 'Products shipped', value: '12' },
    { label: 'Hackathon wins', value: '2' }
  ]
} as const;

export const ABOUT_CONTENT = {
  title: 'Pragmatic engineering with a product mindset',
  paragraphs: [
    "I enjoy building complete web experiences—from polished front-ends to resilient APIs and infrastructure. My toolbox leans on React, TypeScript, and Node.js, paired with modern DevOps practices for reliable delivery.",
    "Recently I've focused on collaborative SaaS products, real-time collaboration tools, and data-rich dashboards. I thrive in teams that ship quickly, iterate often, and care about details.",
    "When I'm not coding you can catch me experimenting in the kitchen, exploring new destinations, or mentoring upcoming developers in the local community."
  ],
  highlights: [
    {
      title: 'Full-stack delivery',
      description: 'Designing, building, and shipping applications end-to-end with an eye on maintainability.'
    },
    {
      title: 'Smooth experiences',
      description: 'Crafting interfaces that feel alive using GSAP, motion design, and subtle micro-interactions.'
    },
    {
      title: 'Collaborative partner',
      description: 'Comfortable leading initiatives, pairing with designers, or coaching teammates through tricky problems.'
    }
  ]
} as const;

export const SKILL_GROUPS = [
  {
    title: 'Frontend engineering',
    icon: 'Sparkles',
    description: 'Delightful, accessible user interfaces and design systems.',
    skills: [
      { name: 'React & Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'GSAP & motion design', level: 80 }
    ]
  },
  {
    title: 'Backend & infrastructure',
    icon: 'Server',
    description: 'Robust APIs, authentication flows, and deployment pipelines.',
    skills: [
      { name: 'Node.js & Express', level: 86 },
      { name: 'MongoDB & PostgreSQL', level: 82 },
      { name: 'REST & GraphQL', level: 78 },
      { name: 'Docker & CI/CD', level: 74 }
    ]
  },
  {
    title: 'Product craft',
    icon: 'Workflow',
    description: 'Discovery, prototyping, and data-informed iteration.',
    skills: [
      { name: 'UX collaboration', level: 84 },
      { name: 'Technical leadership', level: 80 },
      { name: 'Documentation', level: 79 },
      { name: 'Mentorship', level: 76 }
    ]
  }
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    id: 'kec',
    title: 'B.E. Computer Science',
    organisation: 'Kantipur Engineering College, Tribhuvan University',
    start: '2020',
    end: 'Present',
    location: 'Lalitpur, Nepal',
    description:
      'Deepening my foundation in algorithms, software architecture, and data structures while collaborating on research-backed projects.'
  },
  {
    id: 'broadway',
    title: 'Full-stack MERN fellowship',
    organisation: 'Broadway Infosys',
    start: '2024',
    end: '2025',
    location: 'Kathmandu, Nepal',
    description:
      'Completed a 135-hour immersive program focused on shipping production-ready SaaS experiences with the MERN stack.'
  }
] as const;

export const PROJECTS = [
  {
    id: 'sajhabiz',
    name: 'SajhaBiz',
    description:
      'Community-driven donation platform with campaign management, admin dashboards, and Google Maps integrations.',
    longDescription:
      'End-to-end web app enabling local businesses to launch campaigns, accept donations, and manage supporters. Features include JWT-based auth, Google Maps visualisation, Redux state management, and a real-time chat bridge for campaign owners.',
    image: '/Sajhabiz.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Socket.io', 'JWT', 'Google Maps API'],
    github: 'https://github.com/kevin272/MERN/tree/main/API',
    live: '',
    status: 'Live beta'
  },
  {
    id: 'chatr',
    name: 'ChatR',
    description:
      'Real-time messaging platform with video calls, screen sharing, and delightful collaboration tooling.',
    longDescription:
      'Built on Stream, ChatR offers channel management, typing indicators, reactions, and meeting-ready video rooms. Engineered for smooth handovers between devices and low-latency messaging.',
    image: '/ChatR.png',
    technologies: ['React', 'Stream', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/kevin272/ChatR',
    live: 'https://chatr.kebinmalla.com.np',
    status: 'Production'
  },
  {
    id: 'noteify',
    name: 'Noteify',
    description: 'Lightweight note-taking app that syncs across devices and keeps focus on essentials.',
    longDescription:
      'Built with the MERN stack to provide frictionless note capture, tagging, and search. Features offline support and a streamlined editor experience.',
    image: '/Noteify.png',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/kevin272/noteify',
    live: 'https://noteify.kebinmalla.com.np',
    status: 'In progress'
  }
] as const;

export const CONTACT_CHANNELS = [
  {
    icon: 'MapPin',
    title: 'Based in',
    description: 'Kathmandu, Nepal'
  },
  {
    icon: 'Phone',
    title: 'Phone',
    description: '+977 9862394960',
    href: 'tel:+9779862394960'
  },
  {
    icon: 'Mail',
    title: 'Email',
    description: 'mallakebin@gmail.com',
    href: 'mailto:mallakebin@gmail.com'
  },
  {
    icon: 'MessageCircle',
    title: 'Response time',
    description: 'Typically within a day'
  }
] as const;

export const CONTACT_FORM_COPY = {
  title: "Let's build something memorable",
  subtitle:
    "Share a little about your project and I'll reach out with ideas, timelines, and next steps.",
  successMessage: "Thanks for reaching out! I'll be in touch shortly.",
  errorMessage: 'Something went wrong. Please try again or send me an email directly.'
} as const;
