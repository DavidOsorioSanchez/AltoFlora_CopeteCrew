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
      backgroundImage: {
        
      },
    },
    colors: {
      blue: "#76ABAE",
      blackest: "#222831",
      white: "#eeeeee",
      lessBlack: "#31363F",
      crimson: "#DC143C",
      transparente: "#ffffff00",
    },
    boxShadow: {
      'underBox': '0px 15px 0px 0px #2f333b8f',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
