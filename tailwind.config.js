/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {

      colors: {
        'offBlack': "#010101",
        'tamarillo': "#96151D",
        'alto': "#DFDEDE",
        'offWhite': "#FEFEFE",
        'cinnabar': "#EB484C"
      }
    },
  },
  plugins: [],
};
