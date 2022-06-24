import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Opofinance',
    title: 'Opofinance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/chat.js', body: true }
    ]
  },
  router: {
    middleware: 'base'
  },
  css: [
    '~/assets/style.css'
  ],
  plugins: [
    { src: '~/plugins/i18n.js' }
  ],
  components: true,
  buildModules: [
    ['@nuxtjs/vuetify'],
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-MQ26QZN'
  },
  i18n: {
    defaultLocale: 'en',
    lazy: true,
    langDir: '~/lang/',
    locales:[
      { name: 'English' , code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { name: 'Arabic' , code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl' },
      { name: 'Persian' ,code: 'fa', iso: 'fa-IR', file: 'fa.json', dir: 'rtl' }
    ]
  },
  toast: {
    position: 'bottom-center',
    duration: 4000
  },
  axios: {
    credentials: true,
    baseURL: 'https://myaccount.opofinance.com'
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          background:colors.white,
          primary: '#00393B',
          accent: '#be946c',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    publicPath: '/landing'
  }
}
