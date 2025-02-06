import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    extend: {
      // text-[colors]
      colors: {
        main: '#0000e7',
      },
      fontFamily: {
        main: ['var(--font-main)'],
      },
    },
  },
  plugins: [],
};
export default config;
