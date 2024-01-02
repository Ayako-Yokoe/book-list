/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#CDD2F6",
        green: "#B4DADA",
        orange: "#F2C7B1",
        brown: "#ECD8C5",
        indigoPrimary: "#818CF8",
        indigoSecondary: "#A5B4FC",
      },
    },
  },
  plugins: [],
}
