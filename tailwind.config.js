module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        cyberpunk_pink: "#FF66C4",
        cyberpunk_green: "#63FFEC",
        cyberpunk_light_blue: "#242E3C",
        cyberpunk_dark_blue: "#101822",
        sky_blue: "#8FC1D4"
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xxl: '500px',
       },
       fontSize: {
         xxs: '.5rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
