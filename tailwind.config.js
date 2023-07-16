const { colors } = require('tailwindcss/colors')


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
      colors: {
        ...colors,
        'light-gold': '#f5bc51',
        'dark-gold': '#533519',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/1': '3 / 1',
        '2/1': '2 / 1',
        '5/1': '5 / 1',
      }
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-animate'),],
}
