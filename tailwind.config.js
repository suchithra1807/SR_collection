/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F8F4ED',
          200: '#EDE6D6',
          300: '#E0D6C0',
          400: '#C9B99A',
          500: '#A89878',
        },
        rose: {
          50: '#FBF1F0',
          100: '#F5DDD9',
          200: '#E8B5AC',
          300: '#D98E80',
          400: '#C76B5A',
          500: '#A85040',
          600: '#8B3A2C',
        },
        chocolate: {
          50: '#F5F0EC',
          100: '#E0D0C4',
          200: '#C0A092',
          300: '#9F7C6A',
          400: '#7F5847',
          500: '#5F3D2F',
          600: '#4A2E22',
          700: '#3A241B',
          800: '#2B1A14',
          900: '#1C100C',
        },
        gold: {
          50: '#FBF8EE',
          100: '#F5EDD0',
          200: '#EBD9A0',
          300: '#D9BE6E',
          400: '#C7A84A',
          500: '#A98A30',
          600: '#8A6F22',
        },
        sage: {
          100: '#E8EDE3',
          500: '#7A9A6E',
          600: '#5F7E53',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideIn: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
      },
    },
  },
  plugins: [],
};
