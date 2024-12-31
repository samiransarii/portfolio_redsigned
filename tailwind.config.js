/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#12c2e9",
        "purple-light": "#5c3d99",
        purple: "#c670ff",
      },
    },
  },
  plugins: [],
};
