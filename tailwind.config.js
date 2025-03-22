/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blackjack: ["Blackjack", "cursive"],
        theSeasons: ["'The Seasons'", "serif"], // Assuming this is from Demo_Fonts
        lejour: ['LeJourSerif', 'serif'],
      },
      colors: {
        white: "#FFFFFF",
        beige: "#F5F5DC",
        coffeeTan: "#D2B48C",
        coffeeDeep: "#8B5A2B",
        oliveGreen: "#3C4C24",
        cream: "#FAF3E0",
        darkolivegreen: "#5C6147",
        mochaBrown:"#967969",
      },
    },
  },
  plugins: [],
};
