/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './dist/*.js', // Path ke build komponen
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
