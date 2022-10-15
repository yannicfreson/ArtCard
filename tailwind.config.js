/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "code.js"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      return addVariant("children", "& > *");
    },
  ],
};
