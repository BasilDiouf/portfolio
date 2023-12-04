/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        losange: 'url("/assets/icons/losange.svg")',
      },
      colors: { "color-title": "#D2D5DC" },
      fontFamily: {
        poppins: ["Poppins"],
        nunito: ["Nunito"],
        hepta: ["Hepta"],
        josephin: ["Josephin"],
      },
    },
    plugins: [],
  },
};
