import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee",
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#fbbf24", // Amber-400 for yellow
          "primary-focus": "#f59e0b", // Amber-500
          "primary-content": "#1e293b", // Slate-800
          "base-100": "#0f172a", // Slate-900 for dark blue background
          "base-200": "#1e293b", // Slate-800
          "base-300": "#334155", // Slate-700
          "base-content": "#f8fafc", // Slate-50 for text
        },
      },
    ],
    darkTheme: "dark",
  },
} satisfies Config;