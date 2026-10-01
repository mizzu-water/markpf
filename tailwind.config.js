const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0b1120',
        },
        blue: {
          950: '#0c1938',
        },
        emerald: {
          950: '#022c22',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#4f6bf5',
          600: '#4355e8',
          700: '#3440cc',
          bgLight: '#f6f9fe',
          cardBg: '#f8fafd'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
};
