/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Looks for HTML files in the root
    "./src//*.{html,js}", // If using a src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

