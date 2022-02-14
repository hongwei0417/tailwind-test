module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        good: "yellow",
      },
      fontSize: {
        veryBig: "50px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
