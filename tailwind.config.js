/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102344',
        blue: { 50: '#eef5ff', 100: '#dceaff', 500: '#4388f5', 600: '#2870e8', 700: '#1d5bc6' },
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
    },
  },
  plugins: [],
}
