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
        "hero-bg":
          "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('/images/si-hero-2.jpg')",
      },
      fontFamily: {
        roobert: ["var(--font-roobert)"],
      },
    },
  },
  plugins: [],
};
export default config;
