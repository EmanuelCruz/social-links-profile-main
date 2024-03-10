/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "green-custom": "hsl(75, 94%, 57%)",
        "white-custom": "hsl(0, 0%, 100%)",
        "grey-custom": "hsl(0, 0%, 20%)",
        "dark-grey-custom": "hsl(0, 0%, 12%)",
        "off-black-custom": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
