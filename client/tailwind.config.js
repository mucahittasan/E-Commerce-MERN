/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    minHeight: {
      "screenSize": "calc(100vh - 102px)",
      "mobileScreenSize": "calc(100vh - 102px)"
    },
    extend: {
      colors: {
        darkModeBg: "#0C0B0B",
        primaryRed: "#ff1a48",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)"
      },
      backgroundImage: {
        "light-home-bg": "url('/src/assets/images/home-bg.png')",
        "dark-home-bg": "url('/src/assets/images/home-bg-dark.png')",
      }
      ,
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}