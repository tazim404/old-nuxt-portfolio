export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tazim Rahbar',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Tazim Rahbar',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {},
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@tazim_rahbar',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        // content: "https://nuxtjs.org",
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Portfolio',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Portfolio of Tazim Rahbar',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://tazim.netlify.app/tazim-rahbar.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Tazim',
      },
      // Facebook
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Tazim Rahbar',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tazim.netlify.app',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Portfolio',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Portfolio of Tazim Rahbar',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tazim.netlify.app/tazim-rahbar.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://tazim.netlify.app/tazim-rahbar.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Tazim',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `tazim.netlify.app`,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/tazim-rahbar.png' },
    ],
    script: [
      {
        src: 'https://devshub-analytics.herokuapp.com/umami.js',
        'data-website-id': '440dc3db-6525-40a2-8823-d2d735488531',
        async: true,
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['vue-notion/nuxt'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: 0,
  },
}
