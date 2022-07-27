/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/patterns/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: 'Kumbh Sans, sans-serif',
      },
      colors: {
        orange: {
          300: 'hsl(26,100%, 93%)',
          400: 'hsl(26, 100%, 65%)',
          500: 'hsl(26, 100%, 55%)',
        },      
        neutral: {
          100: '#F7F8FD',
          200: '#B6BCC8',
          300: '#68707D',
          400: '#1D2025',
        },
        black: {
          900: '#000000',
        },
      },
      boxShadow: {
        'button': 'hsl(26, 100%, 90%) 0px 12px 30px 5px;'
      }
    },
  },
  plugins: [],
}
