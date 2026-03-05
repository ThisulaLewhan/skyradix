/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#EDF1F5",
        "primary-black": "#000000",
        "soft-graphite": "#161A1D",
        "accent-cyan": "#00FF98",
        "muted-grey": "#A1ABB9",
        "glass-border": "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mesh': 'linear-gradient(to right bottom, #050505, #000000)',
      },
      screens: {
        'lgx': '1346px'
      }
    },
  },
  plugins: [],
};
