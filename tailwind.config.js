/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1312px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        blur: "url('../public/assets/bg_blur.png')",
        'blur-2': "url('../public/assets/bg_blur_2.png')",
        'blur-3': "url('../public/assets/bg_blur_3.png')",
        'blur-4': "url('../public/assets/bg_blur_4.png')",
      },
      colors: {
        'primary-100': '#D0F3FC',
        'primary-200': '#A1E2FA',
        'primary-300': '#71C7F2',
        'primary-400': '#4CABE6',
        'primary-500': '#1882D6',
        'primary-600': '#1165B8',
        'primary-700': '#0C4B9A',
        'primary-800': '#07357C',
        'primary-900': '#042566',
        'secondary-100': '#FEF1D0',
        'secondary-300': '#FCC773',
        'secondary-500': '#F58B18',
        'secondary-700': '#B0510C',
        'secondary-900': '#752904',
        'neutral-100': '#A9A9A9',
        'neutral-300': '#848484',
        'neutral-500': '#5E5E5E',
        'neutral-700': '#383838',
        'neutral-900': '#131313',
        'success-100': '#CCFBD5',
        'success-300': '#66EC99',
        'success-500': '#0BC175',
        'success-700': '#058A6D',
        'success-900': '#025C5A',
        'warning-100': '#FFF8D7',
        'warning-300': '#FFE588',
        'warning-500': '#FFCA3A',
        'warning-700': '#B7851D',
        'warning-900': '#7A500B',
        'error-100': '#FFEADF',
        'error-300': '#FFB0A0',
        'error-500': '#FF6161',
        'error-700': '#B73048',
        'error-900': '#7A1236',
        'shade-0': '#FFFFFF',
        'shade-100': '#000000',
        'grayscale-100': '#F9F9F9',
        'grayscale-200': '#EAEAEA',
        'grayscale-300': '#C1D1DA',
        star: '#FFCA3A',
      },
    },
  },
  plugins: [],
};
