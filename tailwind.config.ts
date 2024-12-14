import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // postlist padding horizontal on main page
      padding: {
        all: '2rem',
        sm: '4rem',
        md: '8rem',
        lg: '12rem',
        xl: '22rem',
      },
      // postlist margin top with intro
      margin: {
        all: '0rem',
        sm: '1rem',
      },
      //main intro min height
      minHeight: {
        all: '200px',
        sm: '240px',
        md: '260px',
        lg: '280px',
        xl: '300px',
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
