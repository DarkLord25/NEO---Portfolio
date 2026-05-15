/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: 'hsl(0 0% 3.9%)',
          foreground: 'hsl(0 0% 98%)',
        },
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, -40%) scale(1)',
          },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
      },
    },
  },
  plugins: [],
}
