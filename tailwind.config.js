/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
  {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundColor: {
          'custom-green': '#1FA45B', 
          'custom-blue-gray': '#E8F0F5', 
          'custom-searchBtn-gray': '#F3F4F6', 
          'custom-catgoryImg-gray': '#F7F8FA', 
        },
        colors: {
          'success':'#1FA45B'
        }
      },
    },
    plugins: [],
  }
)
