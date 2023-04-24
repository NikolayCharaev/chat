/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'calc-minus-160': 'calc(100% - 160px)',
      },
      colors: {
        'black-grey': '#022027',
        'black-blue': '#ed5761',
        'button-hover': '#39b8c2',
        'bg-card': '#be74be',
        'sidebar-bg': '#221831',
        'navbar-bg': '#703b94',
        'search-bg': '#09092d',
        'chat-bg': '#4d3f72',
        'chat-header': '#302968',
        'input-bg': '#8a46d4',
      },
      backgroundImage: (theme) => ({
        gradient: 'linear-gradient(90deg, #7773c6, #9d6cc0, #bd64b2)',
      }),
      screens: {
        xs: { max: '480px' },
        sm: { max: '768px' },
        md: { max: '1060px' },
        xl : {max : '1553px'}
      },
    },
  },
  plugins: [],
};
