const container = ({ addComponents }) => {
  addComponents({
    '.container': {
      width: '100%',
      margin: 'auto',
      paddingRight: '10px',
      paddingLeft: '10px',
      maxWidth: '100%',
      '@screen md': {
        maxWidth: '710px',
      },
      '@screen lg': {
        maxWidth: '950px',
      },
      '@screen xl': {
        maxWidth: '1250px',
      },
      '@media (min-width: 1500px)': {
        maxWidth: '1430px',
      },
      '@media (min-width: 1650px)': {
        maxWidth: '1550px',
      },
    },
  });
};

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/**/*.{html,js,svelte,ts}',
    './src/**/**/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      xs: '374px', // ? iphone x
      sm: '413px', // ? iphone 7 plus
      md: '760px', // ? ipad
      lg: '1020px', // ? ipad pro
      xl: '1260px', // ? laptop
      '2xl': '1500px', // ? laptop 14 inch
      '3xl': '1650px', // ? PC
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#032541',
          100: '#01b4e4',
        },
        success: {
          DEFAULT: '#21d07a',
        },
        warning: {
          DEFAULT: '#d2d530',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/hero.jpeg')",
        'section-img': "url('src/assets/trending-bg.svg')",
      },
      fontFamily: {
        'sans-pro': ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [container, require('@tailwindcss/line-clamp')],
};
