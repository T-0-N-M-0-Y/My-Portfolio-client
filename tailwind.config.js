/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dd50ed",

          "secondary": "#46fca4",

          "accent": "#f4cb77",

          "neutral": "#292734",

          "base-100": "#dfe8f1",

          "info": "#4872e5",

          "success": "#6ee7b7",

          "warning": "#fcc14a",

          "error": "#e6517e",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

