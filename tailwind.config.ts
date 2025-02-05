import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--primary)",
        foreground: "hsl(var(--foreground))",
        green: "#13AC52",
        red: "#F44336",
        tradingNormal: "#919CA9",
        tradingPriceNormal : "#414852",
        tableTextGreen : "#39B363",
        tableTextRed : "#E94745",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "#60A5FA",
          dark: "#2563EB",
          foreground: "hsl(var(--primary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor:{
        orangebg: "#FF8C001A",
        orangemain:"#FF8C00",
        defaultbg :"#EAECEF",
        defaultmain:"##EAECEF",
        profileColor:"#004ADE",
        tableBgGreen : "#E8FAEF",
        tableBgRed : "#FFE8E8",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".popover-content-width-same-as-its-trigger": {
          width: "var(--radix-popover-trigger-width)",
          "max-height": "var(--radix-popover-content-available-height)",
        },
      });
    }),
  ],
} satisfies Config;
