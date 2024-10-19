/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],  // for Google Fonts or custom hosted fonts
        SuBold: ['SuisseIntl-Bold', 'sans-serif'],
        SuLight: ['SuisseIntl-Light', 'sans-serif'],
        SuRegular: ['SuisseIntl-Regular', 'sans-serif'],   // for local custom fonts
      },
    },
  },
  plugins: [],
}

