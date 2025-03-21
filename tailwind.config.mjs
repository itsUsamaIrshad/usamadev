/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          dark: "#1b1b1b",
          light: "#f5f5f5",
          primary: "#B63E96", 
          primaryDark: "#58E6D9", 
      },
      animation:{
        'spin-slow':' spin 8s linear infinite'
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 8px, #000000 100px);',
        blackBanner: "url('/images/black-banner.jpg')", // ✅ Correct path
      },
      screens:{
        xxs:'320px',
        xs: "440px",  // ✅ Extra Small Screens (Mobile)
        sm: "640px",  // ✅ Small Screens (Tablets)
        md: "768px",  // ✅ Medium Screens (Small Laptops)
        lg: "1024px", // ✅ Large Screens (Laptops)
        xl: "1280px", // ✅ Extra Large Screens (Desktops)
        "2xl": "1536px", // ✅ 2X Large Screens (Big Desktops)
      }
      
     
   
    },
  },
  plugins: [],
};
