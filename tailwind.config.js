/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    fontFamily: {
      roboto: ["Roboto, sans-serif"],
      museo: ["MuseoModerno, sans-serif"],
      poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
