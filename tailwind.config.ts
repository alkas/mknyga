import type { Config } from 'tailwindcss'
//import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './app/**/*.{js,vue,ts}',        // Nuxt 4 structure
    './app/layouts/**/*.vue',            // Nuxt 3 structure
    './app/pages/**/*.vue',              // Nuxt 3 structure
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

