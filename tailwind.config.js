/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // ← toggle via <html class="dark">
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          100: '#fef3c7',
          400: '#f59e0b',
          500: '#f59e0b',
          600: '#d97706',
          800: '#92400e',
        },
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.8s ease-out both',
        'fade-in':      'fadeIn 0.6s ease-out both',
        'slide-in-left':  'slideInLeft 0.8s ease-out both',
        'slide-in-right': 'slideInRight 0.8s ease-out both',
        'bounce-slow':  'bounce 2s infinite',
        'pulse-slow':   'pulse 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};