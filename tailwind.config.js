/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 디자인 시스템 적용
      backgroundColor: {
        primary: '#6ED1F9',
        primaryTag: '#CFFAFE',
      },
      colors: {
        primaryTag: '#06B6D4',
      },
      width: {
        sidebar: '19rem',
        line: '23.625rem',
      },
      height: {
        topbar: '4rem',
        homeFront: '28rem',
        line: '0.0625rem',
      },
      maxWidth: {
        nicknamemodal: '30rem',
        homeFront: '34rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
