/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "code.js"],
  theme: {
    extend: {
      colors: {
        background: "#0b1120",
        box: "#1e293b",
        boxLighter: "#2d3748",
        accent: "#38bdf8",
        subtext: "#64748b",
        textbox: "#0e1527",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      return addVariant("children", "& > *");
    },
  ],
};
