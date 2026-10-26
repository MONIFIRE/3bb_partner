/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102840',
        skybrand: '#087CD7',
      },
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
        numbers: ['DM Sans', 'Prompt', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 42px rgba(24,75,118,0.075)',
        float: '0 24px 65px rgba(13,80,132,0.12)',
      },
    },
  },
  plugins: [],
};
