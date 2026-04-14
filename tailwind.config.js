/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        gold: '#c9a96e',
        'gold-light': '#e8d5b7',
        'gold-dark': '#b8935a',
        background: '#faf9f6',
        surface: '#ffffff',
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
