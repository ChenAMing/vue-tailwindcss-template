module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  semi: false,
  printWidth: 97,
  singleQuote: true,
}
