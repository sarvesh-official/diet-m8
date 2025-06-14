import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// Force light mode
const config: Config = {
  darkMode: 'class', // This setting ensures dark mode only applies when .dark class is present
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#04A3A3',
        'soft-aqua': '#E9F7FA',
        'dark': '#000000',
        'light': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 15px rgba(4, 163, 163, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(120deg, #04A3A3 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [
    // Force light mode regardless of user's preference
    plugin(function({ addBase }) {
      addBase({
        'html.light': {
          backgroundColor: '#ffffff',
          color: '#171717',
        },
        'html': {
          backgroundColor: '#ffffff',
          color: '#171717',
        },
        'body': {
          backgroundColor: '#ffffff',
          color: '#171717',
        }
      })
    }),
  ],
}

export default config
