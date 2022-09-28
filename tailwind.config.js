/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-pagination': '#2e2e2e',
        'swap-page-buttons': '#0d6efd',
        'primary-details': '#FFFFFF',
        'second-details': '#43DBAF'
      },
      backgroundImage: {
        'background-pokedex': "url('./Images/background.jpg')",
      }
    },
  },
  plugins: [],
}
