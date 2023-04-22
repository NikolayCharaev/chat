/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "black-grey" : "#022027",
        "black-blue" : "#1D1E33",
        "button-hover" : "#002137"
      }
    },
  },
  plugins: [],
}