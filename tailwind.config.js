/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#257979',
        'crimson': '#8D021F',
      },
      backgroundImage: {
        'busmap': "url('./images/back.png')",
        'cloud':"url('./images/light.png')",
        'green':"url('./images/green.png')",
        'light':"url('./images/light.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
