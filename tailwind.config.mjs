import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cf-bg-black": "#282828",
        "cf-nrm-black": "#393b44",
        "cf-nrm-red": "#c94f6d",
        "cf-nrm-green": "#81b29a",
        "cf-nrm-yellow": "#dbc074",
        "cf-nrm-blue": "#719cd6",
        "cf-nrm-magenta": "#9d79d6",
        "cf-nrm-cyan": "#63cdcf",
        "cf-nrm-white": "#dfdfe0",
        "cf-dim-black": "#222222",
        "cf-dim-red": "#ca4780",
        "cf-dim-green": "#1fa25a",
        "cf-dim-yellow": "#07a19e",
        "cf-dim-blue": "#6690d9",
        "cf-dim-magenta": "#a27fd9",
        "cf-dim-cyan": "#2b96d9",
        "cf-dim-white": "#bebebe",
        "cf-brt-black": "#484848",
        "cf-brt-red": "#f16da6",
        "cf-brt-green": "#46c880",
        "cf-brt-yellow": "#2dc7c4",
        "cf-brt-blue": "#8cb6ff",
        "cf-brt-magenta": "#c8a5ff",
        "cf-brt-cyan": "#52bdff",
        "cf-brt-white": "#e4e4e5",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
