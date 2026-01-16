// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F", // deep navy blue
        accent: "#3B82F6", // elegant blue accent
        secondary: "#8892B0", // muted gray-blue
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // clean, modern font
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.1)", // subtle shadow
      },
    },
  },
  plugins: [],
};
