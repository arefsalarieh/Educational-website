/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      irSans: ["IranSans"],
    },
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      colors: {
        primary: "#338D81",
        secondary: "#CCA349",
        zgh: "#CCA349",
        daste: "#F0F0F0",
        course: "#F0F0F0",
        send: "#6ACA56",
        'mygray' : '#F3F3F3'
      },

      backgroundImage: {
        line: "url('./line.svg')",
        bgLogRegFor: "url('./bgLog.svg')",
        headerSvg: "url('src/assets/images/headerShape.svg')",
        'magnifier' :  "url('./magnifier.png')", 
      },

      backgroundSize: {
        80: "80%",
      },

      backgroundPosition: {
        "top-4": "center top 8rem",
      },
    },
    
  },
  plugins: [],
};
