module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: '500px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        primary: {
          100: '#fffafd',
          200: '#ffdbf1',
          300: '#ffb3e0',
          400: '#ff7aca',
          500: '#eb008d',
          600: '#d1007d',
          700: '#b8006e',
          800: '#8a0053',
          900: '#520031',
        },
        secondary: {
          100: '#efeefc',
          200: '#a8a1ec',
          300: '#6055dd',
          400: '#3024b3',
          500: '#1b1466',
          600: '#140f4d',
          700: '#0e0a33',
          800: '#07051a',
          900: '#000000',
        },
        pink: '#FF49CC',
        black: '#000127',
        gray: '#363636',
      },
      borderWidth: {
        0: '0px',
        1: '1px',
      },
      width: {
        85: '85%',
        90: '90%',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'Sans-serif'],
      nunito: ['Nunito', 'Sans-serif'],
    },
  },
};
