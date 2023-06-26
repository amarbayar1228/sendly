/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        '4xl': '8px 7px 5px 1px #7b7272cc',
        'hdrShadow': '0px 3px 5px 1px #e3e3e3;'
      },
      
      keyframes:{
        'trans-right': {
          '0% , 100%': {transform: 'translateX(0px)'},
          '50%': {transform: 'translateX(5px)'}
        },
        'trans-top':{
          '0% , 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-5px)'}
        },
        'fadeInOut': {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        'fadeIn': {
          '0%': {opacity: 0, scale: 70, transform: 'translate3d(10px, 0, 0)'},
          '100%': {opacity: 1, scale: 100, transform: 'translate3d(0,0,0)'}
        }
      }, 
      animation: {
        'trans-right': 'trans-right 2.0s ease-in-out infinite',
        'trans-top': 'trans-top 2.0s ease-in-out infinite',
        'fadeInOut': 'fadeInOut 1.5s ease-in-out',
        'fadeIn': 'fadeIn 1.7s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-background': "url('/img/bg-1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
     

    },
  },
  plugins: [],
}
