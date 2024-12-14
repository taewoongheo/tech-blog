import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // main page padding horizontal
      padding: {
        all: '2rem',
        sm: '4rem',
        md: '2rem',
        lg: '6rem',
        xl: '10rem',
      },
      //main intro min height
      minHeight: {
        all: '200px',
        sm: '210px',
        md: '210px',
        lg: '230px',
        xl: '250px',
      },
      //text-[fontSize]
      fontSize: {
        FStitle: '2rem',
        FSsub: '1rem',
        FSptitle: '1.7rem',
      },
      //font-[fontWeight]
      fontWeight: {
        FWtitle: '500',
        FWsub: '400',
      },
      //text-[colors]
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
