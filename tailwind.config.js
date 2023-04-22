/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-grey': '#022027',
        'black-blue': '#ed5761',
        'button-hover': '#39b8c2',
        'bg-card': '#be74be',
        'sidebar-bg': '#221831',
        'navbar-bg': '#703b94',
        'search-bg': '#09092d',
      },
      backgroundImage: (theme) => ({
        gradient: 'linear-gradient(90deg, #7773c6, #9d6cc0, #bd64b2)',
      }),
    },
  },
  plugins: [],
};
