/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-red": "#ff005e",
        "brand-teal": "#46F6FF",
        "brand-lightblue": "#A1FFF9",
        "brand-dark": "#111C29",
        "brand-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}

