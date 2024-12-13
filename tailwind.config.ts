import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // main page padding horizontal
      padding: {
        all: '2.5rem',
        sm: '6rem',
        md: '10rem',
        lg: '15rem',
        xl: '20rem',
      },
      fontSize: {
        title: '2rem',
        sub: '1rem',
      },
      fontWeight: {
        title: '500',
        sub: '400',
      },
      // fontFamily: {
      //   main: ['var(--mainfont)'],
      // },
    },
  },
  plugins: [],
};
export default config;
