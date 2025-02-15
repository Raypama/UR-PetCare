// import flowbite from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Path ke file kamu
    "node_modules/flowbite/**/*.js", // Path ke file Flowbite
    flowbite.content()
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [
    flowbite, // Plugin Flowbite
    require('tailwindcss-motion')
  ],
};
