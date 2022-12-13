/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.6)',
        darkGray: '#2e2e2e'
      },
      colors: {
        blue: 'blue',
      },
      backgroundImage: {
        'madagaskar': "url('https://images.moviesanywhere.com/movie-hero/d2f67ff90c07d3ffa733eb3657184669.jpeg?r=16x9&w=3840')",
        'movieBg': "url('https://img.freepik.com/free-photo/rows-red-seats-theater_53876-64710.jpg?w=826&t=st=1668709137~exp=1668709737~hmac=0dbf75f85644c7a5e45b753723cddce5e3f5e6b4aa32c2f743655d8ce221128d')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
