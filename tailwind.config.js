/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F8FAFC',
      },
      textColor:{
        'text-color': '#334155',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        geist: ['"Geist Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



