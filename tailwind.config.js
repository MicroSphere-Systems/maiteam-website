/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF9933',
        'primary-dark': '#E6851A',
        'primary-light': '#FFB366',
        secondary: '#138808',
        dark: '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
        gray: {
          DEFAULT: '#888888',
          light: '#aaaaaa',
          dark: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 153, 51, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
