module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg_dark: '#003040',
        hover_dark: '#023e52',
        text_dark: '#1dd1a1'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
