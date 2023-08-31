import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/images/portada-casa-grande.jpg')"
      },
      colors: {
        primary: '#154d82',
        secondary: '#ea3237',
        white: '#f5f5f5',
        gray: '#ececec',
        hover: '#bf3538'
      }
    }
  },
  plugins: [],
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
