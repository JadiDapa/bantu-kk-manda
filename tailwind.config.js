/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#eff3f7",
        darkgrey: "#AEA8AF",
        magenta: "#D6226D",
        blue: "#34B5D1",
      },
    },
  },
  plugins: [],
};
