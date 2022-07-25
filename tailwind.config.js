/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        secondary: ['Titillium Web', ...fontFamily.serif],
        body: ['Inter', ...fontFamily.sans],
        heading: ['Titillium Web', ...fontFamily.serif],
      },
      fontSize: {
        xsmall: '10px',
        small: '12px',
        base: '16px',
        lg: '18px',
        xlarge: '24px',
        '2xlarge': '30px',
        '3xlarge': '40px',
        '4xlarge': '48px',
        '5xlarge': '60px'
      },
      colors: {
        blue: {
          DEFAULT: '#3704FF',
          darkest: '#022343'
        },
        gray: {
          DEFAULT: '#6E7387'
        }

      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
