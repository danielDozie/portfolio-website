module.exports = {
  darkMode: "class",
  purge:{ 
    content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "dark",
      "bg-purple-500",
      "bg-purple-300",
      "bg-pink-500",
      "bg-pink-300",
      "bg-green-500",
      "bg-green-300",
      "bg-blue-500",
      "bg-blue-300",
      "bg-yellow-500",
      "bg-yellow-300"
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
