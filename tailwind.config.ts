import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pampas: {
          DEFAULT: '#f4f3ee',
          50: '#f4f3ee',
          100: '#efede6',
          200: '#dddacb',
          300: '#c7c1aa',
          400: '#b0a487',
          500: '#a0916f',
          600: '#938063',
          700: '#7b6a53',
          800: '#655747',
          900: '#52473c',
          950: '#2b241f',
        },
        tide: {
          DEFAULT: '#bcb8b1',
          50: '#f7f6f5',
          100: '#ecebe8',
          200: '#d7d5d1',
          300: '#bcb8b1',
          400: '#a39d94',
          500: '#90887f',
          600: '#847a72',
          700: '#6e6660',
          800: '#5b5451',
          900: '#4b4643',
          950: '#272523',
        },
        schooner: {
          DEFAULT: '#8a817c',
          50: '#f4f3f2',
          100: '#e2e1df',
          200: '#c7c4c1',
          300: '#a7a29d',
          400: '#8a817c',
          500: '#807672',
          600: '#6d6461',
          700: '#59514f',
          800: '#4d4746',
          900: '#443f3f',
          950: '#262222',
        },
        merlin: {
          DEFAULT: '#463f3a',
          50: '#f4f4f2',
          100: '#e4e4dd',
          200: '#cbc9bd',
          300: '#aea996',
          400: '#968e79',
          500: '#887e6a',
          600: '#746b5a',
          700: '#5e554a',
          800: '#514942',
          900: '#463f3a',
          950: '#282320',
        },
      }
    }
  },
  plugins: [],
};
export default config;
