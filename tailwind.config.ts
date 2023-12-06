import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './public/**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/images/portada-casa-grande.jpg')"
      },
      colors: {
        white: '#fcfcfc',
        primary: {
          100: '#154d82',
          200: 'rgba(21,77,130,.25)',
          300: 'rgba(21,77,130,.8)'
        },
        secondary: {
          100: '#ea3237',
          200: '#bf3538'
        },
        gray: {
          100: '#ececec',
          200: 'rgba(236,236,236,.25)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-secondary',
    'text-white',
    'bg-hover',
    'bg-gray',
    'bg-hero-section'
  ]
}

export default config
