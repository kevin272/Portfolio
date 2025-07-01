/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'doodle': ['Comic Sans MS', 'cursive', 'sans-serif'],
      },
      colors: {
        // Classy Gray Theme
        doodle: {
          // Paper colors - Elegant grays
          paper: '#f8fafc',
          'paper-dark': '#1e293b',
          
          // Ink colors - Professional grays
          ink: '#334155',
          'ink-light': '#64748b',
          'ink-dark': '#0f172a',
          
          // Accent colors - Sophisticated grays with subtle hints
          blue: '#64748b',
          'blue-light': '#94a3b8',
          'blue-dark': '#475569',
          
          green: '#6b7280',
          'green-light': '#9ca3af',
          'green-dark': '#4b5563',
          
          purple: '#6b7280',
          'purple-light': '#9ca3af',
          'purple-dark': '#4b5563',
          
          orange: '#78716c',
          'orange-light': '#a8a29e',
          'orange-dark': '#57534e',
          
          pink: '#71717a',
          'pink-light': '#a1a1aa',
          'pink-dark': '#52525b',
          
          yellow: '#737373',
          'yellow-light': '#a3a3a3',
          'yellow-dark': '#525252',
        },
        // Light theme colors
        light: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Dark theme colors (gray-based)
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Brand colors (sophisticated grays)
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'draw': 'draw 2s ease-in-out infinite',
        'doodle-bounce': 'doodleBounce 2s ease-in-out infinite',
        'sketch': 'sketch 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        doodleBounce: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(-1deg) scale(1)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(1deg) scale(1.02)',
          },
        },
        sketch: {
          '0%, 100%': { 
            transform: 'rotate(-0.5deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'rotate(0.5deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'rotate(-0.3deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'rotate(0.3deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
      },
      backgroundImage: {
        'doodle-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'paper-texture': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
      },
      boxShadow: {
        'doodle': '3px 3px 0px 0px rgba(0,0,0,0.1)',
        'doodle-hover': '5px 5px 0px 0px rgba(0,0,0,0.15)',
        'doodle-dark': '3px 3px 0px 0px rgba(255,255,255,0.1)',
        'doodle-dark-hover': '5px 5px 0px 0px rgba(255,255,255,0.15)',
      },
      borderRadius: {
        'doodle': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'doodle-alt': '30% 60% 70% 40% / 50% 60% 30% 60%',
      },
    },
  },
  plugins: [],
};