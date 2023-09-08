import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            mainBg: "#F6F7F9",
            primary: "#3563E9",
            bluePrimary: "#3563E9",
            secondary: "#596780",
            darkSecondary: "#1A202C",
            lightSecondary: "#90A3BF",
            grayBorder: "rgba(195,212,233,0.4)",
            footer: "rgba(19,19,19,0.6)",
            information: "#54A6FF",
         },
      },
   },
   plugins: [],
};
export default config;
