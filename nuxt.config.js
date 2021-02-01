export default {
  head: {
    title: 'nuxt-typescript',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=K2D:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
      },
    ],
    script: [
      {
        hid: 'stripe',
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js',
        defer: true,
      },
    ],
  },

  css: [],

  plugins: ['~/plugins/composition-api.ts'],

  components: true,

  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],

  modules: [],

  build: {},
}
