/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",
    "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2563EB', // Bleu principal
        secondaryGreen: '#16A34A', // Vert pour icônes
        secondaryRed: '#DC2626', // Rouge pour icônes
        secondaryPurple: '#7C3AED', // Violet pour icônes
        secondaryOrange: '#F97316', // Orange pour icônes
        secondaryIndigo: '#4F46E5',
      },
    },
  },
  plugins: [],
}

