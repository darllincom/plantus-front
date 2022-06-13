/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-white": "#F6F6FC",
        "light-gray": "#7D7B94",
        "dark-gray": "#5A5F7A",
        "light-green": "#DCE5D2",
        "base-green": "#78B607",
        "base-hover-green": "#5d8f04",
        "dark-green": "#296804",
      },
      borderRadius: {
        "landing": "25%"
      }
    },
  },
  plugins: [],
}
