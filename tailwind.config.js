/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Exo 2"', "sans-serif"],
      main: ['"Roboto"', "sans-serif"]
    },
    colors: {
      blueblack: "#21272b",
      primary: "rgb(238, 64, 46)"
    }
  },
  plugins: []
};
