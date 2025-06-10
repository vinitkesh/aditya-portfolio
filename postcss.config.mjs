const config = {
  plugins: ["@tailwindcss/postcss"],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        background: '#FCFCF9',
        surface: '#FFFDFD',
        text: '#13343B',
        primary: '#21808D',
        'primary-hover': '#1D7480',
        'primary-active': '#1A6873',
        secondary: 'rgba(94,82,64,0.12)',
        // Add others as needed...
      },
      fontFamily: {
        sans: ['FKGroteskNeue', 'Geist', 'Inter', 'sans-serif'],
        mono: ['Berkeley Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.02)',
        sm: '0 1px 3px rgba(0,0,0,0.04)',
        md: '0 4px 6px -1px rgba(0,0,0,0.04)',
        lg: '0 10px 15px -3px rgba(0,0,0,0.04)',
      }
    }
  },
};


export default config;
