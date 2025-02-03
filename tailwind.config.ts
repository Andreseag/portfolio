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
        "gray-0": "#f9f9f9",
        "gray-05": "var(--gray-05)",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",
        "gray-5": "var(--gray-5)",
        "gray-6": "var(--gray-6)",
        "gray-65": "var(--gray-65)",
        "gray-7": "var(--gray-7)",
        "gray-8": "var(--gray-8)",
        "gray-9": "var(--gray-9)",
        "gray-10": "var(--gray-10)",
        "gray-11": "var(--gray-11)",
        "gray-12": "var(--gray-12)",
        "color-border": "var(--color-border)",
        primary: "var(--primary)",
        purple: "var(--purple)",
        "color-text-muted": "var(--color-text-muted)",
        "color-background-sidebar": "var(--color-background-sidebar)",
        "color-text-link": "var(--color-text-link)",
      },
    },
  },
  plugins: [],
} satisfies Config;
