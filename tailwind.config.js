export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        body: {
          dark: '#0B1423',
          light: '#FDFDFD',
        },
        green: {
          1: '#6FB15F',
        },
        'dark-purple': '#5333F6',

        'dark-blue': '#07193C',
        text: {
          white: '#FDFDFD',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
