/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowGreen: "rgb(141, 206, 80)",
        darkGreen: "rgb(27, 81, 45)",
        vanilla: "rgb(243, 238, 165)",
        beige: "rgb(250, 248, 219)",
      },
    },
  },
  plugins: [],
};
