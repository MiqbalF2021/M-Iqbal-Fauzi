/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg': '#222831',
      'primary': '#76ABAE',
      'second': '#31363F',
      'light': '#EEEEEE',
      'red': '#F05454',
      'green': '#76ABAE',
    },
    extend: {
    },
  },
  plugins: [],
}