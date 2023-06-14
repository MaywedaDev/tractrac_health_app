/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': "500px",
        ...defaultTheme.screens
      },
      fontFamily: {
        "body": "Poppins, sans-serif"
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        primary: '#100DB1',
        'dark-accent': '#050517',
        'dark-purple': '#0C0C35',
        'paper': '#F7F7F7',
        'borderDark': "#343434",
        'borderLight': 'rgb(0 0 0 / 12%)'
      }
    },
  },
  plugins: [],
}

