/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#003f62",
        mainYellow: "#EDA415",
        mainRed: "#C33131",
        blackTextColor: "#292D32",
        whiteTextColor: "#FFFFFF",
        blueTextColor: "#185A7D",
        lightBlue: "#E2F4FF",
        lightGreen: "#30BD57",
      },
    },
  },
  plugins: [],
};
