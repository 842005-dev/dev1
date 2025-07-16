/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // You can extend colors, spacing, fonts here if needed.
    },
  },
  plugins: [
    // Example: for prettier scrollbars, you can add:
    // require('tailwind-scrollbar-hide'),
  ],
};
