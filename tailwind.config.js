/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
