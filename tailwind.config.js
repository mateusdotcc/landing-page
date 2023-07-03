/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#0077F4',
      blueLight: '#F0F8FF',
      gray: '#1C3C50',
      grayLight: '#C8D4DD',
      green: '#00D59F',
    },
  },
  plugins: [],
}
