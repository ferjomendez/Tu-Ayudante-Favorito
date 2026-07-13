/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // base y accent usan tripletas RGB para soportar modificadores de
        // opacidad (bg-base/85, bg-accent/10); los demás no los necesitan.
        base: 'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: 'var(--surface)',
        raised: 'var(--raised)',
        line: 'var(--line)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        'accent-ink': 'var(--accent-ink)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
