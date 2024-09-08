/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-combined': '0px 1px 0px 0px #1A1A1A12, 0px 1px 0px 0px #CCCCCC80 inset, 0px -1px 0px 0px #0000002B inset, -1px 0px 0px 0px #00000021 inset, 1px 0px 0px 0px #00000021 inset',
        'custom-combined-2': '0px 1px 0px 0px #E3E3E3 inset, 1px 0px 0px 0px #E3E3E3 inset, -1px 0px 0px 0px #E3E3E3 inset, 0px -1px 0px 0px #B5B5B5 inset',
      
      }
    }
  },
  plugins: [],
}