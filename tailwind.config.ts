import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      //text-[colors]
      colors: {
        main: '#0000e7',
      },
      // fontFamily: {
      //   main: ['var(--mainfont)'],
      // },
    },
  },
  plugins: [],
};
export default config;
