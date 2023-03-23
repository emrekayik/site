/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2c5282',
        secondary: '#718096',
        darkPrimary: '#cbd5e0',
        darkSecondary: '#a0aec0',
      },
    },
  },
  plugins: [],
};
