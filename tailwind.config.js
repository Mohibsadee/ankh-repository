/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      themes: ["light", "dark", "cupcake"],
      fontFamily: {
        hirakaku: ['HiraKakuPro', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

