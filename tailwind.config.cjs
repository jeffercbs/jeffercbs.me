/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night: '#101010ff',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
