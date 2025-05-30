import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
export default config;
