import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        "coral-red": {
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#ffc8c8",
          300: "#ffa1a1",
          400: "#fd6c6c",
          500: "#f63e3e",
          600: "#e31f1f",
          700: "#bf1616",
          800: "#9e1616",
          900: "#831919",
          950: "#470808",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            coralRed: {
              50: "#fef2f2",
              100: "#ffe1e1",
              200: "#ffc8c8",
              300: "#ffa1a1",
              400: "#fd6c6c",
              500: "#f63e3e",
              600: "#e31f1f",
              700: "#bf1616",
              800: "#9e1616",
              900: "#831919",
              950: "#470808",
            },
          },
        },
      },
    }),
  ],
};
