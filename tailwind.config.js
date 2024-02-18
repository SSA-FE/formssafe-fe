/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 디자인 시스템 적용
      backgroundColor: {},
      width: {
        sidebar: '19rem',
      },
      height: {
        topbar: '4rem',
      },
    },
  },
  plugins: [],
};
