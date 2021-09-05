module.exports = {
  purge: ['./components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        500: '#d9534f',
      },
      cyan: {
        500: '#53b6e0',
      },
      green: {
        500: '#74c080',
      },
      orange: {
        500: '#f0b518',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
