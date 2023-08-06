const { colors } = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        ...colors,
        'light-gold': '#f5bc51',
        'dark-gold': '#533519',
        'discord': '#7289da',
        'discord-dark': '#282b30',
        'accents-1': '#333',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '4/1': '4 / 1',
        '3/1': '3 / 1',
        '2/1': '2 / 1',
        '5/1': '5 / 1',
      },
      borderWidth: {
        '2/1': '0.119rem',

      }, backdropBlur: {
        xxs: '1px',
        xs: '2px',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),],
}
