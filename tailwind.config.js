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
      blue: '#007EFF',
      blueLight: '#F0F8FF',
      gray: '#1C3C50',
      gray200: '#838EAC',
      grayLight: '#C8D4DD',
      green: '#00D59F',
    },
  },
  plugins: [],
}
