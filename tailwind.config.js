/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light-bg':'hsl(0, 0%, 98%)',
      'dark-bg':'hsl(207, 26%, 17%)',
      'light-text': 'hsl(200, 15%, 8%)',
      'light': '#ffffff',
      'light-input':'hsl(0, 0%, 52%)',
      'dark-elements': 'hsl(209, 23%, 22%)'

    },
    extend: {},
  },
  plugins: [],
}
