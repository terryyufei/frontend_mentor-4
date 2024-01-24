/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      colors: {
        "nutmeg": "hsl(14, 45%, 36%)",
        "raspberry": "#FFDFDF",
        "roseWhite": "hsl(330, 100%, 98%)",
        "eggShell": "#F5CCA0",
        "lightGrey": "hsl(30, 18%, 87%)",
        "wengeBrown": "hsl(30, 10%, 34%)",
        "darkCharcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        body: ["'Outfit', sans-serif"],
        headings: ["'Young Serif', serif"],
      },
    },
  },
  plugins: [],
}

