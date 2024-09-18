/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
      lavender: {
        100: '#f0e6ff',
      },
    },
  },
  plugins: [],
}