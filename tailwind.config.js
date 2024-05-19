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
      backgroundImage: (theme) => ({
        '_bg-home':
          'linear-gradient(to right, ' +
          theme('colors._slate-25') +
          ', ' +
          theme('colors.white') +
          ', ' +
          theme('colors.slate.50') +
          ')',
      }),
      colors: {
        primaryTag: '#06B6D4',
        mainColor: '#64748b',
        bgColor: '#FAFAFA',
        '_slate-25': '#FDFDFE',
      },
      width: {
        sidebar: '19rem',
        line: '23.625rem',
      },
      height: {
        topbar: '4rem',
        footer: '17.5rem',
        toolbar: '2rem',
        homeFront: '28rem',
        line: '0.0625rem',
      },
      maxWidth: {
        nicknamemodal: '25rem',
        homeFront: '34rem',
        surveyCard: '22.625rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gap: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
      },
      fontSize: {
        // content: ['0.875rem', '16.94px'],
      },
    },
  },
  plugins: [],
};
