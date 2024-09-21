
/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': 'url("/map.jpg")',
        'auth': 'linear-gradient(90deg, rgba(0,0,0,0) 45%, rgba(49,54,63,0.70) 50%)',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
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
  plugins: [nextui(), require("tailwindcss-animate")],

}
