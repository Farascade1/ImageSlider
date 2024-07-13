/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primaryColor: "#2E236C",
      secondaryColor: "#C8ACD6"
    },
    fontFamily:{
      poppin: "Poppins"
    }
  }
  },
  plugins: [],
}

