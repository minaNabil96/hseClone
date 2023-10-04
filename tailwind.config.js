/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loading: "loading 0.7s infinite",
      },
      keyframes: {
        loading: {
          "0%": { transform: "rotate(0)" },
          "15%": { transform: "rotate(60deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "65%": { transform: "rotate(210deg)" },
          "75%": { transform: "rotate(270deg)" },
          "85%": { transform: "rotate(310deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
