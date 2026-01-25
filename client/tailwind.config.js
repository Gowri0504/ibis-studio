/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ibis-gold': '#D4AF37',
        'ibis-gold-light': '#F4C430',
        'ibis-gold-dark': '#AA8C2C',
        'ibis-dark': '#120E07',      // warm deep cocoa to complement gold
        'ibis-card': '#1B140A',      // panel background
        'ibis-gray': '#2A2216',      // subtle separators
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4C430 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #120E07, #1B140A)',
      }
    },
  },
  plugins: [],
}
