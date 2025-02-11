
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ]
,  
  theme: {
    extend: {
      container: {
  			center: true,
  			padding: {
  				default: '1rem',
  				xs: '1rem',
  				sm: '1rem',
  				lg: '4rem',
  				xl: '7rem'
  			}
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgWhite: "#F5F5F5",
        textBlack: "#151515",
        textGray: "#444444",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;