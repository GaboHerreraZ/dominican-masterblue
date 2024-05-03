import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "master-secondary": "#1c2022",
      },
      colors: {
        gold: "#C48B21",
        secondary: "#333333",
        master: {
          100: "#D6E4FF",
          200: "#ADC8FF",
          300: "#84A9FF",
          400: "#6690FF",
          500: "#3366FF",
          600: "#254EDB",
          700: "#1939B7",
          800: "#102693",
          900: "#091A7A",
          DEFAULT: "#091A7A",
        },
      },
      backgroundImage: {
        footer: "url('../../../public/img/jpg/footer.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-intersect")],
};
export default config;
