import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('/images/footer-bg.svg')",
      },
      fontFamily: {
        roobert: ["var(--font-roobert)"],
      },
    },
  },
  plugins: [],
};
export default config;
