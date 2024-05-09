/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "button_bg":"#000000",
        "button_text":"#ffffff",
        "google_bg":"#f1f1f1",
        "google_text":"#474747",
        "input":"#9e9e9e"
      }
    },
  },
  plugins: [
    // ...other plugins
    
  ]
}