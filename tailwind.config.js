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
        bgDetail:'#f3f3f3',
        bgBorderSplit:'#707070',   
        bgArrowDown:'#a5a5a5',
        bgPlaceholder:"#a29c9c",
        bgBtnComment:"#6aca56",
        bgFocusText:"#ded9d9",
        bgShadowBtnComm:"#f6d282", 
        bgDivTopComm:"#e6f0ff",
        bgTextTopComm:"#b6bae3",
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

