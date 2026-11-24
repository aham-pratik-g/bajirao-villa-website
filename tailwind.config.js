/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#152B23",
          900: "#0F211A",
          800: "#152B23",
          700: "#1E3A2F",
          600: "#2C4F40",
          500: "#3D6653",
          400: "#5C8570",
        },
        moss: "#6E8B76",
        beige: "#F6F1E7",
        sand: "#EBE1CF",
        cream: "#FBF8F2",
        gold: {
          DEFAULT: "#C2A05C",
          light: "#D9BE8A",
          dark: "#A2833F",
        },
        ink: "#20241F",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(21, 43, 35, 0.25)",
        card: "0 24px 70px -30px rgba(21, 43, 35, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        kenburns: "kenburns 22s ease-out both",
      },
    },
  },
  plugins: [],
};
