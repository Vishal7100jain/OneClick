/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#74CC7E",
        secondary: "#00818a",
        third: '#00818A',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #73c8a9 0%, #2d8f89 100%)',
      },
    },
  },
  plugins: [],
}

