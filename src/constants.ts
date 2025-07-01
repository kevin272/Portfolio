// Personal Information
export const PERSONAL_INFO = {
  name: "Kebin Malla",
  title: "Full-Stack Developer",
  subtitle: "Full-Stack Developer",
  location: "Kathmandu, Nepal",
  coordinates: { lat: 27.6904, lng: 85.3325 },
  phone: "+977 9862394960",
  email: "mallakebin@gmail.com",
  resumeLink: "https://drive.google.com/file/d/1q--KNIMRF6njAYOLiQ0qrEcprvDt2n9c/view?usp=drive_link",
  
  // Hero section specific
  heroGreeting: "Hello, I'm",
  heroDescription: "I create digital experiences that make you go 'Wow! this is some pretty cool stuff'",
  
  // About section specific
  aboutTitle: "About Me",
  aboutDescription: [
    "I’m a MERN stack developer passionate about building robust, scalable web applications using MongoDB, Express.js, React, and Node.js. My journey began with hands-on projects, quickly evolving into a deep commitment to mastering full-stack development.",
    "I focus on crafting seamless user experiences and efficient backend systems, leveraging tools like Redux, REST APIs, and modern deployment workflows. My work blends clean code, performance optimization, and intuitive design.",
    "Outside of coding, I enjoy gaming, cooking and travelling with a touch of mentoring"
  ],
  
  // Contact section specific
  responseTime: "Within 24 hours"
};

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/kevin272",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/kebinmalla",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:mallakebin@gmail.com",
    icon: "Mail"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/DevilKevin2",
    icon: "Twitter"
  }
];

// Navigation Items
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'skills', label: 'Skills', icon: 'Code' },
  { id: 'education', label: 'Education', icon: 'GraduationCap' },
  { id: 'projects', label: 'Projects', icon: 'Briefcase' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];

// Tech Stack
export const TECH_STACK = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript", 
  "Node.js",
  "Python",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "C"
];

// Skills Categories with Logos
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Technologies',
    skills: [
      { 
        name: 'React', 
        level: 95, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: 'from-blue-500 to-blue-600' 
      },
      { 
        name: 'TypeScript', 
        level: 90, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: 'from-blue-600 to-blue-700' 
      },
      { 
        name: 'Tailwind CSS', 
        level: 85, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        color: 'from-blue-400 to-blue-500' 
      },

      { 
        name: 'JavaScript', 
        level: 92, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: 'from-yellow-500 to-yellow-600' 
      },
      { 
        name: 'HTML5', 
        level: 95, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: 'from-orange-500 to-orange-600' 
      }
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { 
        name: 'Node.js', 
        level: 88, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: 'from-green-500 to-green-600' 
      },
      { 
        name: 'Python', 
        level: 85, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: 'from-yellow-500 to-yellow-600' 
      },
      { 
        name: 'MongoDB', 
        level: 80, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: 'from-green-600 to-green-700' 
      },
      { 
        name: 'Express.js', 
        level: 90, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        color: 'from-gray-600 to-gray-700' 
      },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { 
        name: 'Git', 
        level: 90, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: 'from-orange-500 to-orange-600' 
      },
      { 
        name: 'Docker', 
        level: 78, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        color: 'from-blue-600 to-blue-700' 
      },
      { 
        name: 'Figma', 
        level: 85, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        color: 'from-purple-500 to-purple-600' 
      },
      { 
        name: 'VS Code', 
        level: 95, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        color: 'from-blue-500 to-blue-600' 
      },
      { 
        name: 'Linux', 
        level: 85, 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        color: 'from-gray-700 to-gray-800' 
      }
    ],
  },
];

// About Features
export const ABOUT_FEATURES = [
  {
    title: 'Clean Code',
    icon: 'Code'
  },
  {
    title: 'Beautiful Design',
    icon: 'Palette'
  },
  {
    title: 'Performance',
    icon: 'Zap'
  },
  {
    title: 'Passion',
    icon: 'Heart'
  },
];

// Education
export const EDUCATION = [
  {
    id: 'university-cs',
    institution: 'Kantipur Engineering College, Tribhuvan University',
    degree: 'Bachelors of Engineering',
    field: 'Computer Science',
    startDate: '2020',
    endDate: 'Present',
    description: 'Pursuing a Bachelor of Engineering in Computer Science with a focus on software development, data structures, algorithms, and web technologies. Engaged in various projects and research activities to enhance practical skills.',
    location: 'Dhapakhel, Lalitpur'
  },
  {
    id: 'bootcamp-fullstack',
    institution: 'Broadway Infosys',
    degree: 'Certificate',
    field: 'Full-Stack Web Development',
    startDate: '2025',
    description: 'Successfully finished a 135-hour training course focused on full stack development using the MERN stack, culminating in the completion of a project.',
    achievements: [
      'Built a full-stack applications deployed to production',
      'Led solo project resulting in polished e-commerce platform',
      'Completed 150+ hours of coding and project work'
    ],
    location: 'Shantinagar, Kathmandu'
  }
];

// Projects
export const PROJECTS = [
  {
    id: 'donation-platform',
    title: 'SajhaBiz',
    description: 'A full-featured donation platform built with React, Node.js, and PostgreSQL. Features include user authentication, Guestchat with admin, and admin dashboard.',
    longDescription: 'A full stack  donation platform enables users to support local business campaigns, featuring JWT-based authentication, Google Maps API integration, and a CRUD-powered admin panel for managing users and campaigns. It leverages Redux for seamless user auth and donation state handling, with additional features like donation tracking, personalized dashboards, and real-time chat.',
    image: './Sajhabiz.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Socket.io', 'JWT', 'Google Maps API'],
    github: 'https://github.com/kevin272/MERN/tree/main/API',
    live: '',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2025
  },
  {
    id: 'chat-app',
    title: 'ChatR',
    description: 'A real-time chat application with group chats, direct messaging, and media sharing capabilities with video calling.',
    longDescription: 'Real-time chat with typing indicators, reactions, threads with video calls , screen  sharing and recording support via Stream',
    image: './ChatR.png',
    technologies: ['React', 'Stream.IO', 'Express', 'MongoDB', 'TailwindCSS', 'DaisyUI'],
    github: 'https://github.com/kevin272/ChatR',
    live: 'https://chatr.kebinmalla.com.np',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2025
  },
  {
    id: 'noteify',
    title: 'Noteify',
    description: 'Simple Note taking app utilizing CRUD.',
     longDescription: 'Simple Note taking app utilizing CRUD.',
    image: './Noteify.png', // Placeholder, you'll need to create this image
     technologies: ['MERN STACK'], 
    github: 'https://github.com/kevin272/noteify',
    live: 'https://noteify.kebinmalla.com.np', 
    featured: true, 
    category: 'web',
    status: 'in progress',
     year: 2025
  },
  {
    id: 'portfolio',
    title: 'Portfolio with template',
    description: 'Current site you are viewing, built with React, TypeScript, and Tailwind CSS.',
     longDescription: ' ',
    image: 'https://i.imgur.com/dVo15Vx.png',
     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'], 
    github: 'https://github.com/kevin272/Portfolio',
    live: 'https://kebinmalla.com.np/Portfolio',
    featured: true, 
    category: 'web',
    status: 'in progress',
     year: 2025
  }
];

// Contact Information
export const CONTACT_INFO = [
  {
    icon: 'MapPin',
    title: 'Location',
    content: 'Kathmandu, Nepal',
  },
  {
    icon: 'Phone',
    title: 'Phone',
    content: '+977 9862394960',
    href: 'tel:+9779862394960'
  },
  {
    icon: 'Mail',
    title: 'Email',
    content: 'mallakebin@gmail.com',
    href: 'mailto:mallakebin@gmail.com'
  },
  {
    icon: 'MessageCircle',
    title: 'Response Time',
    content: 'Within 24 hours',
  },
];

// Contact Form Configuration
export const CONTACT_FORM = {
  title: "Let's Start a Conversation",
  subtitle: "I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or you're someone with an idea you'd like to discuss, I'd love to hear from you.",
  submitText: "Send Message",
  successMessage: "Thank you for your message! I'll get back to you soon.",
  errorMessage: "Sorry, there was an error sending your message. Please try again."
};



// Certifications
export const CERTIFICATIONS = [
  {
    id: 'aws-solutions-architect',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SA-2023-001',
    url: 'https://aws.amazon.com/certification/',
    description: 'Validates expertise in designing distributed systems on AWS'
  },
  {
    id: 'react-advanced',
    name: 'Advanced React Development',
    issuer: 'Meta',
    date: '2023',
    credentialId: 'META-REACT-2023',
    url: 'https://developers.facebook.com/certification/',
    description: 'Advanced concepts in React including performance optimization and testing'
  },
  {
    id: 'google-cloud-dev',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-DEV-2022-789',
    url: 'https://cloud.google.com/certification/',
    description: 'Demonstrates ability to build scalable applications on Google Cloud Platform'
  }
];

// App Configuration
export const APP_CONFIG = {
  siteName: "Kebin Malla - Portfolio",
  siteDescription: "Full-Stack Developer specializing in React, Node.js, and modern web technologies.",
  siteUrl: "https://www.kebinmalla.com.np",
  author: "Kebin Malla",
  
  // Animation settings
  animations: {
    pageLoadDelay: 0.8,
    staggerDelay: 0.1,
    scrollTriggerStart: 'top 80%',
    scrollTriggerEnd: 'bottom 30%'
  },
  
  // Theme settings
  theme: {
    primaryColor: 'primary',
    secondaryColor: 'secondary',
    accentColor: 'accent'
  },
  
  // Feature flags
  features: {
    smoothScroll: true,
    particleBackground: false,
    scrollProgress: true,
    darkMode: true,
    googleMaps: false,
    blog: false, // Future feature
    testimonials: false // Future feature
  }
};