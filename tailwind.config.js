export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: { ink: "#070b17", panel: "#10172a", cyan: "#66e3ff" },
      boxShadow: { glow: "0 0 45px rgba(81,154,255,.12)" },
    },
  },
  plugins: [],
};
