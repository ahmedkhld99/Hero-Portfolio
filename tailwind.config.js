/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16213E',
          50: '#EEF0F6',
          100: '#D3D8E7',
          200: '#A7B0CE',
          300: '#7B89B6',
          400: '#4F619D',
          500: '#324375',
          600: '#293A65',
          700: '#202D50',
          800: '#16213E',
          900: '#0D1428',
        },
        accent: {
          DEFAULT: '#315EFB',
          50: '#EEF2FF',
          100: '#DCE4FE',
          200: '#B9C9FD',
          300: '#96AEFC',
          400: '#7393FB',
          500: '#315EFB',
          600: '#123FE0',
          700: '#0E31AF',
          800: '#0A247F',
          900: '#06174F',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
        xl3: '24px',
        xl4: '30px',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(22, 33, 62, 0.12)',
        softer: '0 4px 20px -4px rgba(22, 33, 62, 0.08)',
        card: '0 20px 60px -15px rgba(22, 33, 62, 0.18)',
        glow: '0 0 0 1px rgba(49, 94, 251, 0.08), 0 20px 40px -12px rgba(49, 94, 251, 0.25)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(22,33,62,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,33,62,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
