module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sf: ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Core palette
        primary: '#090a10',           // deep space background
        secondary: '#11162f',         // tinted panel backgrounds
        accent: '#8b5cf6',            // violet accent
        accent2: '#22d3ee',           // cyan accent
        card: '#0d1333',              // card background
        border: 'rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        space: "url('/space-bg.png')",
      },
      boxShadow: {
        glow: '0 0 20px rgba(139,92,246,0.25), 0 0 40px rgba(34,211,238,0.20)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'blob-move': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(20px,-10px,0) scale(1.05)' },
          '66%': { transform: 'translate3d(-10px,10px,0) scale(0.98)' },
        },
      },
      animation: {
        blob: 'blob-move 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
