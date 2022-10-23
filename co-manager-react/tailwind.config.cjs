/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,html}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
        '1xl': '6rem'
      },
    },
    extend: {}
  },
  plugins: [require('daisyui')]
}
