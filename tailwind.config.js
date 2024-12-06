/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/css/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A53A4',
        secondary: '#F0942A',
        whiteis_bg: '#F5F5F5',
        bavista_text: '#3A53A4',
        blackis: "#222222",
        grayis: "#DBDBDB"
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        Bavista_Soulare: ['Bavista_Soulare', 'sans-serif'],
      },

      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)', // Example shadow
      },
    },
  },
  plugins: [],
};
