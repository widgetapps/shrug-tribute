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
        'photo-bench': "url('/img/bg_bench.png')",
      },
      backgroundPosition: {
        'top-bench': 'center top 6rem',
        'top-bench-sm': 'center top 6rem',
        'top-bench-md': 'center top 6rem',
        'top-elephant': 'center top -2rem',
        'top-elephant-sm': 'center top -4rem'
      },
      backgroundSize: {
        'cover-bench': '65%',
        'cover-bench-sm': '100%',
        'cover-bench-sm': '100%',
        'cover-elephant': '160%',
        'cover-elephant-md': '150%'
      },
      colors: {
        'shrug-light': '#ebebeb',
        'shrug-dark': '#292929',
        'shrug-red': '#E92300',
        'shrug-red-400': '#EB6D56'
      }
    },
  },
  plugins: [],
}
