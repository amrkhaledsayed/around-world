/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "var(--text-color-dark)",
        backWhite: "var(--background-color-white)",
        backOffWhite: "var(--background-color-off-white)",
        backPrimary: "var(--background-color-primary)",
      },
    },
  },
  plugins: [],
};
