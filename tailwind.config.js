/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors:{
        primary: '213448',
        secondary: '547792'
      }
    },
  },
  variants: [],
  plugins: [],
}

