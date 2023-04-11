/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo-elephant': "url('/img/bg_elephant.png')",
      },
      backgroundPosition: {
        'top-elephant': 'center top -2rem',
        'top-elephant-sm': 'center top -4rem'
      },
      backgroundSize: {
        'cover-elephant': '160%',
        'cover-elephant-md': '150%'
      },
      colors: {
        'shrug-bg': '#ebebeb',
        'shrug-red': '#E92300',
        'shrug-red-400': '#EB6D56'
      }
    },
  },
  plugins: [],
}
