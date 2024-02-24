/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Nunito: ["Nunito Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      QuickSand: ["QuickSand", "sans-serif"],
      // Add the additional font families here:
      DefaultFont: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    colors: {
      primaryWhite: "#F9FBFC",
      white: "#FFFFFF",
      black: "#000000",
      red: {
        100: "#fee2e2",
        200: "#fecaca",
        300: "#FF7E84",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
      },
      yellow: {
        dark: "#FFC529",
        light: "#FFCF59",
      },
      blue: {
        blue: "#5360E2",
        darkBlue: "#525FE1",
        slateBlue: "#4F94DF",
        light: "#0066ff",
      },
      violet: {
        300: "#B5B2E3",
        light: "#EFDEFF",
        main: "#4A3F81",
        dark: "#9747FF",
      },
      brick: "#F66843",
      green: {
        light: "#E0F5E9",
        lime: "#A7CE4A",
        garden: "#56D274",
        // dark: "#1FAF38",
        dark: "#006600",
      },
      pink: {
        light: "#FFDCE5",
        hotPink: "#FF5FA8",
        darkPink: "#FF1850",
        900: "#F63955",
      },
      slate: {
        900: "#0f172a",
        700: "#334155",
      },
    },
  },
  plugins: [require("daisyui")],
};
