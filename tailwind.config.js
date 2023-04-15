/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#565656',
        darkBlue: '#33394D',
        blue: '#204DB5',
        red: '#F64247',
        orange: '#EB9714',
        yellow: '#FABE7D',
      }
    },
  },
  plugins: ["styled-jsx/babel"],
}
