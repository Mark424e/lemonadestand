/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        
        // Using modern `hsl`
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        
        // Using legacy `rgba`
        primary: 'rgba(var(--color-primary), <alpha-value>)',
      },
    },
  },
  plugins: [],
}