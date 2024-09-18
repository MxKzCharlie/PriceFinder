/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "custom": "35% 65%"
      },
      minWidth: {
        "custom": "72rem"
      },
      maxWidth: {
        "custom": "72rem"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // {
      //   // myTheme: {
      //   //   "primary": "#2e3cfa",
      //   //   "secondary": "#99b9ff",
      //   //   "accent": "#212ab2",
      //   //   "neutral": "#506aff",
      //   //   "base-100": "#dce9ff",
      //   // }

      // },
      "bumblebee"
    ],
  },
}

