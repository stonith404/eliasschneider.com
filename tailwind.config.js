/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Menlo"']
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'foreground': '#111111',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

      }
    }
  },
  plugins: [],
}
