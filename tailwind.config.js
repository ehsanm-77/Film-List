// eslint-disable-next-line no-redeclare, @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['vazir', ...defaultTheme.fontFamily.sans],
      },
    },
    // colors: {
    //   form: '#515050',
    //   list: '#595959',
    //   save: '#f6c90e',
    //   header: '#ffe664',
    //   text: '#ffff',
    // },
  },
  plugins: [],
};
