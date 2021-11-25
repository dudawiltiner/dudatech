module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'red-color': '#E71341',
        'yellow-color': '#FFC86C',
        'black-color': '#10100F',
      },
      borderColor: {
        'red-color': '#E71341',
        'yellow-color': '#FFC86C',
        'black-color': '#10100F',
      },
      textColor: {
        'red-color': '#E71341',
        'yellow-color': '#FFC86C',
        'black-color': '#10100F',
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
