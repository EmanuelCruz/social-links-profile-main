/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "green-custom": "hsl(75, 94%, 57%)",
        "green-custom-click": "hsla(75, 94%, 57%, 0.678)",
        "white-custom": "hsl(0, 0%, 100%)",
        "grey-custom": "hsl(0, 0%, 20%)",
        "dark-grey-custom": "hsl(0, 0%, 12%)",
        "off-black-custom": "hsl(0, 0%, 8%)",
      },
      fontSize: {
        paragraph: "14px",
      },
      fontFamily: {
        primary: "inter",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
