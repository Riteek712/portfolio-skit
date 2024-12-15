/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        orchid: '#DA70D6', // Orchid color
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
      },
      keyframes: {
        slowBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        slowBounce: 'slowBounce 2s infinite'
      }
    }
  },
  plugins: []
};