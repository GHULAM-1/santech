import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enables dark mode using 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors mapped from CSS variables
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--color-blue)", // Use your blue variable directly
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--color-light-green)", // Light green
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "var(--color-green)", // Green accent color
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-box-grey)", // Grey for muted content
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Destructive color
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))", // Border color
        input: "hsl(var(--input))", // Input field background
        ring: "hsl(var(--ring))", // Ring color for focus
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        // Custom border radii based on your variables
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Open Sans font family
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Animate plugin for Tailwind CSS
  ],
};

export default config;
