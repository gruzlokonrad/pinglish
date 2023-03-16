/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#282c34',
      'gray': '#565656',
      'dark-blue': '#33394D',
      'blue': '#204DB5',
      'red': '#F64247',
      'orange': '#EB9714',
      'yellow': '#FABE7D',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}