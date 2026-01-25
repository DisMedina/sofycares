/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Client's main brand color - Deep Purple #662d91
        primary: {
          50: '#f5f0f9',
          100: '#ebe0f3',
          200: '#d7c1e7',
          300: '#c3a2db',
          400: '#9463b8',
          500: '#662d91',  // Base - Client's main color
          600: '#5c2883',
          700: '#4d216d',
          800: '#3e1b58',
          900: '#2f1442',
        },
        // Client's secondary - Soft Lavender #af70af
        secondary: {
          50: '#faf5fa',
          100: '#f5ebf5',
          200: '#ebd7eb',
          300: '#dfc0df',
          400: '#c798c7',
          500: '#af70af',  // Base - Client's lavender
          600: '#9d649d',
          700: '#835383',
          800: '#6a436a',
          900: '#503350',
        },
        // Client's new accent - Blush Pink #e3aaaa
        accent: {
          50: '#fdf7f7',
          100: '#fbefef',
          200: '#f7dfdf',
          300: '#f0c8c8',
          400: '#e3aaaa',  // Base - Client's blush pink
          500: '#d99393',
          600: '#c97a7a',
          700: '#b06363',
          800: '#8f5050',
          900: '#6f3f3f',
        },
        sage: {
          50: '#f5f7f2',
          100: '#ebeee5',
          200: '#d7ddcb',
          300: '#c3ccb1',
          400: '#B6C8A9',
          500: '#a5b894',
          600: '#8fa077',
          700: '#708060',
          800: '#5a6650',
          900: '#454c3f',
        },
        olive: {
          50: '#f3f4f0',
          100: '#e7e9e1',
          200: '#cfd3c3',
          300: '#b7bda5',
          400: '#8fa169',
          500: '#6C7A47',
          600: '#5d6b3f',
          700: '#4e5936',
          800: '#3f472c',
          900: '#303523',
        },
        beige: {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f5f1e7',
          300: '#f0eadb',
          400: '#E9DFC9',
          500: '#e1d4b3',
          600: '#d4c29d',
          700: '#c2a882',
          800: '#a18a6b',
          900: '#836f56',
        },
        'text-primary': '#2B1E34',
        'light-gray': '#F3F0F4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};