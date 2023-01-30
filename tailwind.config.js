/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      extend: {
        fontFamily: {
          'Inter': ['Inter', 'sans-serif']
        },
      },
    },
    extend: {
      colors: {
        'primary': {
          '50': '#F8FAFC',
          '500': '#040FD9',
          '600': 'rgb(4 15 217 / 85%)',
          '900': '#0F172A'
        },
      },
      textColor: {
        'primary': {
          '300': '#040FD9',
          '700': '#334155',
          '500': '#64748B'
        },
        'footer': {
          '1': '#94A3B8',
          '2': '#CBD5E1'
        }
      },
    },
  },
  plugins: [],
}