module.exports = {
  darkMode: 'class',
  purge:{ 
    content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "bg-purple-500",
      "bg-purple-300",
      "bg-pink-500",
      "bg-pink-300"
    ]
  },
  theme: {
    extend: {},
    fontFamily: {
      "archivo": ['"Archivo Black"'],
      "mitr": ["Mitr"],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
