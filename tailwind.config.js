/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D4AF37', // Gold
          dark: '#F0C14B', // Brighter gold for dark mode
        },
        secondary: {
          light: '#000000', // Black
          dark: '#FFFFFF', // White for dark mode
        },
        text: {
          light: '#333333', // Dark gray for light mode
          dark: '#F3F4F6', // Bright gray for dark mode
        },
        background: {
          light: '#FFFFFF', // White
          dark: '#111827', // Dark blue-gray
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
