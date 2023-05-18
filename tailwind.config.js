/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      darkMode: 'class',
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
        primary: '#100DB1'
      }
    },
  },
  plugins: [],
}

