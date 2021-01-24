export default {
  head: {
    title: process.env.SITENAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
    'nuxt-fontawesome'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faMoon', 'faSun', 'faSearch', 'faEnvelope', 'faUser', 'faBriefcase']
      }
    ]
  },
  axios: {},
  build: {
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  },
}
