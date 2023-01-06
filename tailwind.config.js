/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode:"class",
  
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      pink: "#E933FF",
      darkGrey:"#c6c8c7",
      grey: "#5A5A5A",
      black: "#232323",
      white:"#FFFFFF",
      darkWhite:" #F2F3F5",
    },
  },
  plugins: [],
};
