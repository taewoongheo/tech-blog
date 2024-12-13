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
        FStitle: '2rem',
        FSsub: '1rem',
      },
      fontWeight: {
        FWtitle: '500',
        FWsub: '400',
      },
      colors: {
        FCmain: '#0000e7',
      },
      // fontFamily: {
      //   main: ['var(--mainfont)'],
      // },
    },
  },
  plugins: [],
};
export default config;
