// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-typed-router',
  ],
  extends: ['@shuriken-ui/nuxt'],
  css: ['./app/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'lt', language: 'lt-LT' },
      { code: 'en', language: 'en-US' }
    ],
    defaultLocale: 'lt',
  },

  googleFonts: {
    families: {
      "Noto Sans": true,
      "Inter": true
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  //srcDir: '.',

  //dir: {
  //  app: 'app'
  //  },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },


})