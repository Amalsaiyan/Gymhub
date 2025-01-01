/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "var(--primary-color)",
  white: "var(--white)",
  black: "var(--black)",
};

const fontFamily = {
  primary: ["Poppins", "sans-serif"], // Define the 'sans' font-family
  secondory: ["Libre Bodoni", "serif"], // Define the 'serif' font-family
};

const container = {
  center: true,
  padding: "calc(var(--js-gutter-x) * 0.5)",
};

const borderRadius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  full: "50%",
};

module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    colors,
    container,
    fontFamily,
    extend: {
      borderRadius,
      screens: {
        xs: { max: "576px" },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1420px",
        xxxl: "1600px",
        laptop: { min: "1200px", max: "1550px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "992px" },
      },
    },
  },
  plugins: [],
};
