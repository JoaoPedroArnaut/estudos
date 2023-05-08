/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    spacing: {
      '97':'97px'
    },
    extend: {
      colors: {
        '008BEA':'#008BEA'
      },
      backgroundImage: {
        'banner': "url('/Component 49.png')",
      }
    },
  },
  plugins: [],
}