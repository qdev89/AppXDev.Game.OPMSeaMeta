/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        opm: {
          bg: '#0a0d14',
          card: '#121724',
          cardLight: '#1b2234',
          border: '#232d43',
          borderHighlight: '#374768',
          yellow: '#facc15',
          gold: '#eab308',
          red: '#ef4444',
          crimson: '#dc2626',
          purple: '#a855f7',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          green: '#22c55e',
          orange: '#f97316'
        },
        rarity: {
          ur: '#ff0055',
          'ssr-plus': '#f59e0b',
          ssr: '#eab308',
          sr: '#a855f7',
          r: '#3b82f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'glow-yellow': '0 0 20px -3px rgba(250, 204, 21, 0.4)',
        'glow-red': '0 0 20px -3px rgba(239, 68, 68, 0.4)',
        'glow-purple': '0 0 20px -3px rgba(168, 85, 247, 0.4)',
        'glow-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.4)',
        'glow-ur': '0 0 25px 0px rgba(255, 0, 85, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(250, 204, 21, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
