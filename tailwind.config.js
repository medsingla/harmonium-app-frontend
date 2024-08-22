/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundSize: {
        'contain': 'contain',
      },
      blur: {
        xs: '3px',
      }
    },
  },
  plugins: [],
}

