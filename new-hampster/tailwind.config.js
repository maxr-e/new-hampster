/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
       },

       backgroundImage: {
        'hero-img': "url('./images/jtnp_mountain_wm.png')",
       },
    },
  },
  plugins: [],
}

