/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        correct: 'correct 1s both',
        close: 'close 1s both',
        popup: 'popup 1s both',
        popdown: 'popdown 1s both',
      },
      keyframes: {
        popup: {
          '0%': {
            transform: 'translateY(-150%)',
          },
          '100%': {
            transform: 'translateY(10px)',
          },
        },
        popdown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
        correct: {
          '0%': {
            transform: 'rotateY(360deg)',
          },
          '100%': {
            transform: 'rotateY(0)',
            background: '#6AAA64',
            color: 'white',
          },
        },
        close: {
          '0%': {
            transform: 'rotateY(360deg)',
          },
          '100%': {
            transform: 'rotateY(0)',
            background: '#FFBF00',
            color: 'white',
          },
        }
      },
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    backfaceVisibility
  ] 
}
