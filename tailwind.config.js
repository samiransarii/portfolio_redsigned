/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "primary-heading": "5.6rem",
      xs: "1.6rem",
      sm: "1.8rem",
      heading: "2.4rem",
      normal: "2.2rem",
    },
    extend: {
      colors: {
        blue: "#12c2e9",
        "purple-light": "#5c3d99",
        purple: "#c670ff",
        white: "#cbd5e1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
