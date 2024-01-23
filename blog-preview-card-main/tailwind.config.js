/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "yellow2": "hsl(47, 88%, 63%)",
        "grey": "hsl(0, 0%, 50%)",             
      },
      fontFamily: {
        body: ["Figtree, sans-serif"],        
      },
    },
  },
  plugins: [],
}
