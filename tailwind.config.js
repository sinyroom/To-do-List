/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e5f3ff',
          500: '#3d9ef2',
        },
        gray: {
          25: 'var(--color-gray-25)',
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
        red: {
          500: '#ff2727',
        },
        white: '#ffffff',
        black: '#000000',
      },
      screens: {
        md: '744px',
        lg: '1200px',
        gnb: '1580px',
      },
      fontSize: {
        11: '10px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px',
        'body-14': ['14px', { lineHeight: '1.8' }],
        'body-16': ['16px', { lineHeight: '1.8' }],
        'body-18': ['18px', { lineHeight: '1.4' }],
        'body-20': ['20px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
