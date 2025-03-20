import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue-4971B2': "#4971B2",
        'black-181822': "#181822",
        'border-color': "#E8E8E8",
        'DD5D59': "#DD5D59",

      },
      fontFamily: {
        'red-hat-display': ["var(--font-red-hat-display)", "sans-serif"],
      },
      fontSize: {
        "body-1": ["32px", "40px"],
        "body-2": ["16px", "20px"],
        "body-3": ["12px", "16px"],
      },
      borderRadius: {
        "50": "50px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      width: {
        'container-1440': '1440px',
        'container-1240': '1240px',
      }
    },
  },
  plugins: [],
} satisfies Config;
