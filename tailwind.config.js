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
        'mobile-small': '320px',    // Petits mobiles (iPhone SE, anciens modèles)
        'mobile-medium': '375px',   // Mobiles moyens (iPhone 8, iPhone X)
        'mobile-large': '430px',    // Mobiles larges (iPhone 15 Plus/Pro Max, grands Android)
        '13poucesStandard': '1440px',
        '13poucesHigh': '2560px',
        '14poucesStandard': '1600px',
        '14poucesHigh': '1920px',
        '15poucesStandard': '1680px',
        '15poucesHigh': '2880px',
        '17poucesStandard': '1920px',
        '17poucesHigh': '2560px',
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) 1s forwards',
      },
      boxShadow: {
        // 'profile-picture': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
        'profile-picture': '6px 5px 8px 0px rgba(62,66,66,0.10);',
      },
      minHeight: {
        '200vh': '200vh',
      },
    },
  },
  plugins: [],
};
