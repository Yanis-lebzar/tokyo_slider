/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Aboreto: ["Aboreto", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroImage: "url('/assets/blue-tokyo.png')",
        tokyoStreet: "url('/assets/tokyoStreet.png')",
        tokyoDay: "url('/assets/tokyoDay.png')",
        winterTokyo: "url('/assets/winterTokyo.png')",
        streetFoodTokyo: "url('/assets/streetFoodTokyo.png')",
        oldTokyo: "url('/assets/oldTokyo.png')",
        blossomTokyo: "url('/assets/blossomTokyo.png')",
      },
      boxShadow: {
        innerShadow: "inset 0px -149px 67px rgba(0, 0, 0, 0.25);",
      },
      screens: {
        wideScreen: "1950px",
      },
    },
  },
  plugins: [],
};
