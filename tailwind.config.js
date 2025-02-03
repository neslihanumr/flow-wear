/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btncolor: "#4D0F0F"
      },
      fontFamily: {
      logo: ['Joan', 'serif'],       //logo font
      navbar: ['Forum', 'serif'],      //navbar font
      main: ['Barlow', 'serif'], //main font 
      text: ['Blinker', 'serif']          
    },},
  },
  plugins: [],
}

