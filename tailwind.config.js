/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1f1f1f',
      },
      fontFamily: {
        fontArchivo: ['"Archivo"', 'serif'],
      },
    },
  },
  plugins: [],
}

