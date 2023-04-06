/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        mailBG: '#141414',
      },
      colors: {
        title: '#E5E5E5',
        textGray: '#808080',
        textBlack: '#141414',
      },
      fontSize: {
        titleSize: '14px',
        bigTitleSize: '64px',
      },
      width: {
        container: '1400px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.titleText': {
          fontSize: '14px',
          color: '#e5e5e5',
          fontWeight: '500',
        },
      });
    },
  ],
};
