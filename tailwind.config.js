/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#006837',
        secondary: '#08be6a',
        accent: '#f37221',
        green1: '#39b54a',
        darkColor: '#010507',
        green2: '#8FE6AB'
      },
      fontFamily: {
        inter: ['Inter'],
        sono: ['Sono']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class'
};
// #e26c2d green old
// #2c632c orange
// #08be6a green young
