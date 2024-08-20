/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
    colors: {
      white: "#eeeeee",
      blackest: "#222831",
      lessBlack: "#31363F",
      crimson: "#DC143C",
      darkCrimson: "#8B0000",
      blue: "#76ABAE",
      mint: "#0E8388",
      yellow: "#E9B824",
      darkYellow: "#EE9322",
      transparente: "#ffffff00",
    },
    boxShadow: {
      'underBox': '0px 15px 0px 0px #2f333b8f',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
