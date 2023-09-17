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
      },
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2c632c',

          secondary: '#08be6a',

          accent: '#e26c2d',

          neutral: '#181b25',

          'base-100': '#eae2ee',

          info: '#9bd6e4',

          success: '#1c8757',

          warning: '#c69606',

          error: '#ee5749'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
// #e26c2d green old
// #2c632c orange
// #08be6a green young
