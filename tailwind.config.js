/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10B981', // Emerald green
        secondary: '#064E3B', // Dark green
        accent: '#34D399', // Light green
      },
    },
  },
  plugins: [],
};