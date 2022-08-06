import { Config } from 'tailwindcss'

const theme = process.env.THEME || 'light'

export default <Config> {
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [theme],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: theme,
  },
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
  ]
}
