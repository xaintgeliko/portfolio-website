/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); // Import Tailwind colors

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.cyan,
    },
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1537px",
    },
  },
  plugins: [],
};
