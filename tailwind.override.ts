import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
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

export default config;
