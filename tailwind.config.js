module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge:{ 
    content:[
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./safelist.txt",
    ],
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
  plugins: [
    require('tailwind-safelist-generator')({
      patterns: [
        'text-{colors}',
        'bg-{colors}',
        'border-{borderWidth}',
        '{screens}:gap-{gap}',
      ],
    }),
  ],
}
