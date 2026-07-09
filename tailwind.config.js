/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './content/**/*.md',
  ],
   theme: {
    extend: {
      colors: {
        brand: {
          light:   '#DE646C',
          DEFAULT: '#D02530',
          dark:    '#991B1B',
          darker:  '#79161C',
        },
        leaf: {
          light:   '#9BD35B',
          DEFAULT: '#76B82A',
          dark:    '#56861F',
        },
        sage: '#A1C4B5',
        emerald: {
          800: '#065f46',   // secondary green: H2 section headings
      },
      },
      fontFamily: {
        sans:    ['Ubuntu', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        code:    ['"Source Code Pro"', 'ui-monospace', 'monospace'],
        mono:    ['"Source Code Pro"', 'ui-monospace', 'monospace'],
        slogan:  ['"Finger Paint"', 'system-ui', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

