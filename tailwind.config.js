const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.neutral[50],
      gray: colors.neutral,
      yellow: colors.amber,
      blue: colors.sky,
      orange: colors.orange
    },
    fontFamily: {
      'sans' : ['Rubik', 'sans-serif'],
      'mono' : ['Rubik Mono One', 'sans-serif'],
      'cursive' : ['Carter One', 'cursive']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
