/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#338D81',
        secondary: '#CCA349',
        bgLogRegFor: '#46a194',
        bgbtns:"#cca349",
        bgnews: '#f7f7f7',
        bgWriterNews:'#6f97b9',
        bgBorder:'#ffffff',
      },
      screens: {
        'xs':'300px',
        // => @media (min-width: 300px) { ... }
    
      }
    },
    fontFamily: {
      irSans: ['IranSans'],
    }
  },
  plugins: [],
}

