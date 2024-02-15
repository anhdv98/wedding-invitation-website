/** @type {import('tailwindcss').Config} */
const { default: flattenColorPalette, } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      'sec': 'TheSecret, -apple-system, Roboto, sans-serif, serif',
      'diamond': 'Diamonda, -apple-system, Roboto, sans-serif, serif',
      'comfortaa': 'Comfortaa, -apple-system, Roboto, sans-serif, serif',
      'hand': 'Authoritative, -apple-system, Roboto, sans-serif, serif'
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
