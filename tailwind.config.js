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
      grey: "#5A5A5A",
      black: "#232323",
      white:"#FFFFFF",
    },
  },
  plugins: [],
};
