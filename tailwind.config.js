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
        'top-elephant': 'center top -4rem'
      },
      colors: {
        'shruggb': '#ebebeb'
      }
    },
  },
  plugins: [],
}
