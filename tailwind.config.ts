import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // postlist padding horizontal on main page
      padding: {
        all: '1rem',
        sm: '6rem',
        md: '10rem',
        lg: '14rem',
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
        FStitle: '2.3rem',
        FSsub: '1rem',
        FSptitle: '1.7rem',
      },
      //font-[fontWeight]
      fontWeight: {
        FWtitle: '600',
        FWsub: '400',
      },
      //text-[colors]
      colors: {
        FCmain: '#0000e7',
      },
      // fontFamily: {
      //   main: ['var(--mainfont)'],
      // },
      //image size
      spacing: {
        sm: '5.5rem',
        md: '6.5rem',
        lg: '7.5rem',
        xl: '8.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
