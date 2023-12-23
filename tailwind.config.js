/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'four': 'repeat(4, minmax(100px, 300px))',
        'two': 'repeat(2, minmax(100px, 300px))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      backgroundImage:{
        'hero':'url(./public/images/desktop/image-hero.jpg)',
        'creation-grad':'linear-gradient(to right top, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff)',
      },
      colors:{
        'f-color':'hsl(0, 0%, 41%)'
      },
      fontFamily:{
        'alata':'alata',
        'Josefin-Sans':'Josefin Sans',
      },
    },
  },
  plugins: [],
}

