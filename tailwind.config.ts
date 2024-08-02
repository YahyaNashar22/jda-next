import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        b50: "#e9eaf2",
        b75: "#a6aacb",
        b100: "#8187b5",
        b200: "#4a5396",
        b300: "#253080",
        b400: "#1a225a",
        b500: "#171d4e",
        y50: "#f9f5eb",
        y75: "#e7d6ad",
        y100: "#ddc48b",
        y200: "#ceab59",
        y300: "#c49a37",
        y400: "#896c27",
        y500: "#785e22",
        footerLightBG: "#E4E6E1",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
      },
      letterSpacing: {
        "3p": "0.03em",
      },
      backgroundImage: {
        "hero-bg": "url('/hero.png')",
        "statistics-bg": "url('/statistics_bg.png')",
        "breaker-bg": "url('/breaker.png')",
        "region-bg": "url('/region.png')",
      },
    },
  },
  plugins: [],
};
export default config;
