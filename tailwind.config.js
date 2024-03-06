/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        backColor: '#0F1535', 
        sideBarcol: '#06031F',
        Bodycol: '#090F2A',
        yellow: '#D4AF37',
        green: '#04B816',
        btncol: '#0075ff',
        iconcol: '#718096',
        brgray:'#1A1F37',
        brAqua: '#0BCDB8',
        brBlue: '#0075FF',
      },
    },
  },
  plugins: [nextui()],
};
