module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      objectFit: ["hover", "focus"], // if you need specific states
      colors: {
        primary: "#293e91",
      },
      // backgroundImage: {
      //   "banner-image": "url('/src/assets/banner-1.jpg')",
        
      // },
      
    },
  },
  plugins: [],
};
