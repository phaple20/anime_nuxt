export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    mode: 'universal',
    title: 'anime',
    htmlAttrs: {
      lang: 'jp',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'アニメ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/farewrvicons.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['ant-design-vue/dist/antd.css'],
  loading: { color: '#f47e36' },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  router: {
    linkActiveClass: 'active-link',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/ant-design-vue/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
