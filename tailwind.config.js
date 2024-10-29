/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./"],
  theme: {
    extend: {
      screens:{
        'tiny':'200px'
      }
    },
  },
  plugins: [],
}

