/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#172D59',
          gold: '#FFDE17',
          red: '#EA2B41',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F6FA',
          alt: '#F0F2F8',
        },
        ink: {
          DEFAULT: '#1A1D26',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};
