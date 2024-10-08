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
        space_grotesk: ['var(--font-spaceGrotesk)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      screens: {
        'mobile-landscape': { 'raw': '(max-width: 950px) and (orientation: landscape)' },
        // 'screen-32': '2560px',
      },
    },
  },
  plugins: [],
};
