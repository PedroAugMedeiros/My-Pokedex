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
        'normal': 'bg-gray-300',
        'fighting': 'background-color: rgb(127 29 29);',
        'flying': 'background-color: rgb(186 230 253);',
        'poison': 'background-color: rgb(63 98 18);',
        'ground': 'background-color: rgb(180 83 9);',
        'rock': '	background-color: rgb(87 83 78);',
        'bug': 'background-color: rgb(132 204 22);',
        'ghost': '	background-color: rgb(126 34 206);',
        'steel': 'background-color: rgb(120 113 108);',
        'fire': 'background-color: rgb(220 38 38);',
        'water': 'background-color: rgb(29 78 216);',
        'grass': 'background-color: rgb(190 242 100);',
        'electric': 'background-color: rgb(250 204 21);',
        'psychic': 'background-color: rgb(253 230 138);',
        'ice': 'background-color: rgb(34 211 238);',
        'dragon': '	background-color: rgb(234 88 12);',
        'dark': 'background-color: rgb(15 23 42);',
        'fairy': 'background-color: rgb(217 70 239);',
        'unknown': '	background-color: transparent;',
        'shadow': '	background-color: rgb(17 24 39);',
      },
      backgroundImage: {
        'background-pokedex': "url('./Images/background.jpg')",
      }
    },
  },
  plugins: [],
}
