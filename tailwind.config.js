module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ad55e0",

          "secondary": "#ddda11",

          "accent": "#0ad882",

          "neutral": "#24282E",

          "base-100": "#F6F1F8",

          "info": "#ADC0EB",

          "success": "#115F45",

          "warning": "#F5D742",

          "error": "#F0191C",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
};