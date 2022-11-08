/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        frequency: {
          '0%, 50%': {opacity: 0.5},
          '50%, 100%': {opacity: 1}
        },
        fadeIn: {
          'from': {opacity: 0},
          'to': {opacity: 1}
        },
        zoomIn: {
          'from': {transform: 'scale(0)'},
          'to': {transform: 'scale(1)'}
        }
      },
      animation: {
        frequency: 'frequency 1s ease-in-out infinite',
        fadeIn: 'fadeIn .3s ease-in-out',
        fadeInSlowely: 'fadeIn 1s ease-in-out',
        zoomIn: 'zoomIn 0.3s ease-in-out'
      },
      
    },
  },
  plugins: [],
}
