/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '275px',
      'xxs': '330px',
      'xs': '375px',
      '2s': '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif']
      },
      colors: {
        'snow': '#E5E5E5',
        'pwhite': '#F0ECE2',
        'oldwhite': '#DDDDDD',
        'offwhite': '#F7F6F2',
        'pbrown': '#DFD3C3',
        'secbrown': '#C7B198',
        'pdark': '#596E79',
        'pblue': '#1C658C',
        'browngray': '#D8D2CB',
        'secblue': '#326593',
        'olddark': '#44484D',
        'newblue': '#4B6587',
        'newgray': '#C8C6C6',
        'newgreen': '#83AFA6',
        'newdark': '#58727F',
        'newWhite': '#E5E5E5',
        'newTan': '#D3A284',
        'newbrown': '#F0E5CF',
        'bblue': '#435b71',
        'shadowlike': '#B3B3C5',
  
      },
    },
  },
  plugins: [],
}