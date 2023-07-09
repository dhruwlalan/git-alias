/** @type {import('tailwindcss').Config} */

const ott = () => {
  const range = {}
  for (let i = 0; i <= 200; i += 0.5) {
    range[i] = `${i * 0.25}rem`
  }
  return range
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: { ...ott(), inherit: 'inherit' },
      fontSize: { ...ott(), px: '1px' },
      lineHeight: ott(),
      spacing: ott(),
      height: ott(),
      minHeight: ott(),
      maxHeight: ott(),
      width: ott(),
      minWidth: ott(),
      maxWidth: { ...ott(), screen: '100vw' },
    },
  },
  plugins: [],
}
