/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0c0b09', // page background, near-black warm
          soft: '#141210', // raised surface
          line: '#26221d', // hairline borders
        },
        bone: {
          DEFAULT: '#f4f1ea', // primary text, warm off-white
          muted: '#a39c90', // secondary text
          faint: '#6f685d', // tertiary / captions
        },
        sand: {
          DEFAULT: '#c9a86a', // warm bronze accent
          deep: '#a8854b',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
      },
      maxWidth: {
        edge: '88rem',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
