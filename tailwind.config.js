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
        'mobile-small': '320px',    // Petits mobiles (iPhone SE, anciens modèles)
        'mobile-medium': '375px',   // Mobiles moyens (iPhone 8, iPhone X)
        'mobile-large': '425px',    // Mobiles larges (iPhone 12 Pro Max, grands Android)
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) 1s forwards',
      },
    },
  },
  plugins: [],
};
