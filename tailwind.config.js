module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    fontFamily: {
      'robot': 'Roboto, sans-serif'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}