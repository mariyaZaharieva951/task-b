/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Montserrat', 'sans-serif']
      },
       colors: {
        'red-bg': '#DD363D',
        'gray-bg': '#FAFAFA',
        'gray-tx': '#AFAFAF',
      }
    },
  },
  plugins: [],
}

