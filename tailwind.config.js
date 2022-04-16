module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg_dark: 'black',
        hover_dark: '#0f0',
        text_dark: '#0a0'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
