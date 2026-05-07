/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        institutional: {
          charcoal: '#0B0B0E',
          white: '#EDEDED',
          accent: '#C2A47A',
          gold: '#D4B98E',
          border: '#1E1E26',
          hover: '#14141A',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.8' }],
        'body-lg': ['20px', { lineHeight: '1.75' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}