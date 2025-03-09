import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

export default withShurikenUI({
  content: [
    './components/**/*.{js,vue,ts}',
    './app/**/*.{js,vue,ts}',        // Nuxt 4 structure
    './app/layouts/**/*.vue',            // Nuxt 3 structure
    './app/pages/**/*.vue',              // Nuxt 3 structure
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        'primary-invert': colors.white,
        muted: colors.stone,
        melsva: {
          '50': '#f5f8fa',
          '100': '#e9eff5',
          '200': '#cfdee8',
          '300': '#a5c3d4',
          '400': '#77a4bd',
          '500': '#5387a4',
          '600': '#406c89',
          '700': '#35586f',
          '800': '#2f4b5d',
          '900': '#2b404f',
          '950': '#1c2a35',
        },
        gelsva: {
          '50': '#fef7ee',
          '100': '#feedd6',
          '200': '#fbd7ad',
          '300': '#f8b26a',
          '400': '#f59242',
          '500': '#f2731d',
          '600': '#e35913',
          '700': '#bc4212',
          '800': '#963516',
          '900': '#792f15',
          '950': '#411509',
        },
        zalsva: {
          '50': '#f5f7ee',
          '100': '#e8edda',
          '200': '#d2dcba',
          '300': '#abbd81',
          '400': '#99ae6d',
          '500': '#7d934f',
          '600': '#61743c',
          '700': '#4b5a31',
          '800': '#3e492b',
          '900': '#363f28',
          '950': '#1b2112',
        },
        rausva: {
          '50': '#fdf4f3',
          '100': '#fce7e7',
          '200': '#f8d3d3',
          '300': '#f3aeb0',
          '400': '#eb8185',
          '500': '#e15b64',
          '600': '#cb3344',
          '700': '#ab2538',
          '800': '#8f2235',
          '900': '#7b2033',
          '950': '#440d16',
        }
      },
      fontFamily: {
        notoSans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
})

