import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          brand: "#FF5A1F",
          dark: "#D9430D",
        },
        ink: {
          DEFAULT: "#0B0B0A",
          panel: "#151411",
          muted: "#77736C",
        },
        paper: {
          DEFAULT: "#FFFDF8",
          warm: "#F1E7D6",
          deep: "#D8C8B0",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
