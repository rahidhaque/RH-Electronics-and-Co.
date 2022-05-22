module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#38c19a",
          secondary: "#7510a0",
          accent: "#71e2db",
          neutral: "#27213B",
          "base-100": "#FFFFFF",
          info: "#3584F3",
          success: "#198A81",
          warning: "#AA800E",
          error: "#F24052",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
};