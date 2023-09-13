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
      keyframes: {
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-4rem)' },
          '100%': { opacity: '100', transform: 'translateX(0)' }
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(4rem)' },
          '100%': { opacity: '100', transform: 'translateX(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(4rem)' },
          '100%': { opacity: '100', transform: 'translateY(0)' }
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-4rem)' },
          '100%': { opacity: '100', transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'slide-right': 'slide-right 1s ease-out',
        'slide-left': 'slide-left 1s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'slide-down': 'slide-down 1s ease-out',
        'spin-slow': 'spin 60s linear infinite',
        float: 'float 5s ease-in-out infinite'
      }
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
