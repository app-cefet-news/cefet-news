/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      colors: {
        neutral: {
          '0': '#ffffff',
          '10': '#fafafa',
          '20': '#f5f5f5',
          '30': '#ebebeb',
          '40': '#dedede',
          '50': '#bfbfbf',
          '60': '#b0b0b0',
          '70': '#a3a3a3',
          '80': '#949494',
          '90': '#858585',
          '100': '#757575',
          '200': '#666666',
          '300': '#575757',
          '400': '#4a4a4a',
          '500': '#3b3b3b',
          '600': '#2e2e2e',
          '700': '#1c1c1c',
          '800': '#0d0d0d',
          '900': '#000000'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.neutral.0')
            },
            h2: {
              color: theme('colors.neutral.0')
            },
            p : {
              color : theme('colors.neutral.0')
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.800')
              }
            },
            li: {
              color: theme('colors.neutral.20'),
              '&::marker': {
                color: theme('colors.neutral.20'),
              }
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
