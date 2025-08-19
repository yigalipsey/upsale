/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)", "Arial", "Helvetica", "sans-serif"],
        rubik: ["var(--font-rubik)", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          500: "#092274",
          600: "#001c55",
          700: "#001a4a",
          800: "#001540",
          900: "#001030",
        },
        accent: {
          100: "#FFD54F",
          200: "#FFC107",
          300: "#FAD02C",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  // אופטימיזציה לביצועים
  corePlugins: {
    preflight: true,
  },
  // דחיסה
  future: {
    hoverOnlyWhenSupported: true,
  },
};
