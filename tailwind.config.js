/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        'xxl': '1800px',  // Custom breakpoint
        'xl': '1536px',  // Custom breakpoint
        'l' : '1280px',
        'md': '768px'
      //   "sm: 640px"
      }
    },
  },
  plugins: [],
}
