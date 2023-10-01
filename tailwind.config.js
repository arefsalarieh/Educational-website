/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#338D81',
      secondary: '#CCA349',
    },
    fontFamily: {
      irSans: ['IranSans'],
    }
  },
  plugins: [],
}

