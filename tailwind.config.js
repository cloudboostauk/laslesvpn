/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        textGray: '#4F5665',
        border: '#F53855',
        buttonRed: "#F53838",
        iconBg: "#FFECEC",
        plan: "#F6F6F6",
        pborder: "#DDDDDD"
        
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif"
      }
    },
  },
  plugins: [],
}
