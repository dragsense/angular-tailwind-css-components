/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern:
        /(bg|border)-(primary|secondary|slate|gray|zinc|neutral|red|yellow|green)(-(50|100|200|300|400|500|600|700|800|900|950))?/,
      variants: ["hover", "focus", "hover:dark"],
    },
    {
      pattern: /(border)-('dashed' | 'dotted' | 'double' | 'solid' | 'none')/,
    },
  ],
  plugins: [],
};
