/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#5c2ede',
        gradient2: '#7143e3',
        gradient1: '#0170B9',
        fontColor:"#3a3a3a",
        section5Para :"#2f3f50        ",
        yelloColor :'#ffc300        '
        
      },
      fontFamily: {
        'my-custom-font': ['helvitica-font', 'sans'],

        'my-proxi-nova': ['proxi-nova', 'sans-serif'],
        'my-proxi-nova-regular': ['proxi-nova-regular', 'sans-serif'],

      },


      fontSize: {
        '54': '54px',
        '23': '23px',
        '14': '14px',
        '15': '15px',
        '18': '18px',
        '20': '20px',
        '17': '17px',
        '38': '38px',
        '32': '32px',
        '13': '13px',
      },
      width: {
        '340': '340px',
      },
    },
  },
  plugins: [],
}