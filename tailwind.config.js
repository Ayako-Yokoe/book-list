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
        "indigo-primary": "#818CF8",
        "indigo-secondary": "#A5B4FC",
      },
    },
  },
  plugins: [],
}
