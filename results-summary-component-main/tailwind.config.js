/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./public/**/*.{html, js}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      colors: {
        "lightRed": "hsl(0, 100%, 67%)",
        "orangeyYellow": "hsl(39, 100%, 56%)",
        "greenTeal": "hsl(166, 100%, 37%)",
        "cobaltBlue": "hsl(234, 85%, 45%)",
        "slateBlue": "hsl(252, 100%, 67%)",
        "royalBlue": "hsl(241, 81%, 54%)",
        "violetBlue": "hsla(256, 72%, 46%, 1)",
        "persianBlue": "hsla(241, 72%, 46%, 0)",
        "paleBlue": "hsl(221, 100%, 96%)",
        "lightLavender": "hsl(241, 100%, 89%)",
        "grayBlue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        body: ["'Hanken Grotesk', sans-serif"],
      },
    },
  },
  plugins: [],
}

